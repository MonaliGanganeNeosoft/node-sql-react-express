import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}
  // private readonly items: Item[] = [
  //   {
  //     id: '101',
  //     name: 'item 1',
  //     qty: 100,
  //     description: 'nice1',
  //   },
  //   {
  //     id: '102',
  //     name: 'item 2',
  //     qty: 200,
  //     description: 'nice2',
  //   },
  // ];

  // findAll(): Item[] {
  //   return this.items;
  // }

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  // findOne(id: string): Item {
  //   return this.items.find((item) => item.id === id);
  // }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
}
