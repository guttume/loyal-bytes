export const Queries = () => {
  return (
    <div className="px-8 py-12 mx-8 mb-16 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-blue-50 lg:mx-12 rounded-xl lg:px-20">
      <div className="items-center justify-between space-y-4 lg:flex lg:space-y-0">
        <div>
          <p className="font-bold text-lg mb-3">
            Still have queries?
          </p>
          <p>
            Reach out to us and our friendly staff will be more than happy to
            assist you.
          </p>
        </div>
        <div>
          <a
            href="/contact.html" title="Contact Us"
            className="inline-block btn btn-outline-secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
