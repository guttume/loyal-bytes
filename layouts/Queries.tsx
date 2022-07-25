import Link from "next/link";

export const Queries = () => {
  return (
    <div className="bg-orange-500 px-4 lg:px-20 py-12">
      <div className="lg:flex space-y-4 lg:space-y-0 items-center justify-between">
        <div>
          <p className="text-5xl font-bold text-orange-50 mb-4">
            Still have queries?
          </p>
          <p className="text-xl text-orange-50 font-bold">
            Reach out to us and our friendly staff will be more than happy to
            assist you.
          </p>
        </div>
        <div>
          <Link href={"/contact"}>
            <a className="btn btn-outline-secondary inline-block">Contact Us</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
