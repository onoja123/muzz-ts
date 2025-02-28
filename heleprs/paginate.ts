import { Request } from "express";
import { PaginateData } from "../types/interface/paginate";

export const paginate = (req: Request) => {
  const page = parseInt(req.query.page as string) || 1;
  let perPage = parseInt(req.query.perPage as string) || 10;

  switch (true) {
    case perPage > 100:
      perPage = 100;
      break;
    case perPage <= 0:
      perPage = 10;
      break;
  }

  const offset = (page - 1) * perPage;

  return { offset, limit: perPage };
};

export const getPagination = (req: Request, total: number): PaginateData => {
  const page = parseInt(req.query.page as string) || 1;
  let perPage = parseInt(req.query.perPage as string) || 10;

  switch (true) {
    case perPage > 100:
      perPage = 100;
      break;
    case perPage <= 0:
      perPage = 10;
      break;
  }

  const pageCount = Math.ceil(total / perPage);

  return {
    page,
    total,
    pageCount,
    perPage,
  };
};