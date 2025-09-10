import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { SignUpDto, SignInDto } from './dto';
import { User } from './models/user.model';

@Injectable()
export class AuthService {
  private users: User[] = []; // In-memory storage for demo. Replace with a database in production.

  constructor(private jwtService: JwtService) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { username, email, password } = signUpDto;

    // Check if user already exists
    const existingUser = this.users.find((user) => user.email === email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    // Hash password - using the synchronous version to avoid type errors
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user
    const newUser: User = {
      id: uuidv4(),
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Save user
    this.users.push(newUser);

    // Generate JWT token
    const token = this.generateToken(newUser);

    return { token };
  }

  async signIn(signInDto: SignInDto): Promise<{ token: string }> {
    const { email, password } = signInDto;

    // Find user by email
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Check password - using the synchronous version to avoid type errors
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT token
    const token = this.generateToken(user);

    return { token };
  }

  // Not using async since we're not awaiting anything
  validateUserById(userId: string): Omit<User, 'password'> {
    const user = this.users.find((user) => user.id === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Don't return the password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return result;
  }

  private generateToken(user: User): string {
    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
    };

    return this.jwtService.sign(payload);
  }
}
