import Link from "next/link";
import { useState } from "react";

export default function HeaderLinkItemButton({ id }) {
  const [loading, setLoading] = useState(false);
  return (
    <Link href={`/listing/${encodeURIComponent(id)}`}>
      <button
        onClick={() => setLoading(true)}
        className=" relative w-40 h-10 mx-auto justify-end my-3 border border-red-300 p-1 focus:outline-none rounded-full px-4 font-light text-red-400 hover:bg-red-400 hover:text-white"
      >
        {loading ? (
          <svg
            class="animate-spin absolute -ml-1 mr-3 h-5 w-5 text-red"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          ""
        )}
        Details
      </button>
    </Link>
  );
}
