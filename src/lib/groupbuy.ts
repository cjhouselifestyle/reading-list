import { BOOK_GROUPBUY_URL, TOY_GROUPBUY_URL } from "@/data/groupbuy";

export function getGroupbuyUrl(pathname: string): string {
  switch (pathname) {
    case "/toys":
      return TOY_GROUPBUY_URL;
    case "/":
    default:
      return BOOK_GROUPBUY_URL;
  }
}
