import { PartialType } from '@nestjs/mapped-types';
import { CreateQuoteDTO } from './create-quote.dto';

export class UpdateQuoteDto extends PartialType(CreateQuoteDTO) {}
