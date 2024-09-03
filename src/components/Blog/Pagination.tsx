import Link from "next/link";
import {
  NextIcon,
  PreviousIcon,
} from "@/components/Common/Icons/BlogIcon/NavigateIcon";


const Pagination = () => {
  return (
    <nav
      className="mt-8 flex items-center justify-center space-x-3"
      aria-label="Pagination"
    >
      <span className="rounded px-2 py-1.5 text-light">
        <span className="sr-only">Previous</span>
        <PreviousIcon />
      </span>
      <span
        aria-current="page"
        className="rounded bg-dark px-4 py-2 text-white"
      >
        1
      </span>
      <Link
        aria-current="page"
        className="rounded px-4 py-2 text-dark hover:bg-theme-light"
        href="/blog/Blog2"
      >
        2
      </Link>
      <Link
        href="/blog/Blog2"
        className="rounded px-2 py-1.5 text-dark hover:bg-theme-light"
      >
        <span className="sr-only">Next</span>
        <NextIcon />
      </Link>
    </nav>
  );
};

export default Pagination;
