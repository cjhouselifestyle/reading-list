import { BOOK_GROUPBUY_URL, TOY_GROUPBUY_URL } from "@/data/groupbuy";

export function getGroupbuyUrl(pathname: string): string {
  switch (true) {
    case pathname === "/toys" || pathname.startsWith("/toys/"):
      return TOY_GROUPBUY_URL;
    case pathname === "/":
    default:
      return BOOK_GROUPBUY_URL;
  }
}

export function getToyGroupbuyUrl(productId: string): string {
  const url = new URL(TOY_GROUPBUY_URL);
  url.hash = `#:~:text=${encodeURIComponent(productId)}`;
  return url.toString();
}
