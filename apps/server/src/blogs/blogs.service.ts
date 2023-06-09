import { Blog } from './blog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {}

  totalBlogCount(): Promise<number> {
    return this.blogRepository.count();
  }

  findByPage(page: number) {
    return this.blogRepository.find({
      take: 6,
      skip: (page - 1) * 6,
      order: {
        published_at: 'DESC',
      },
      where: {
        published_at: Not(IsNull()),
      },
    });
  }

  findOneBySlug(slug: string) {
    return this.blogRepository.findOneBy({
      slug,
    });
  }

  findAll() {
    return this.blogRepository.find({
      where: {
        published_at: Not(IsNull()),
      },
    });
  }
}
