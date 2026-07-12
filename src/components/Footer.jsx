const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-24">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold">
          Sunny Raj
        </h2>

        <p className="text-gray-400 mt-3">
          Building scalable applications with Java, Spring Boot & React.
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © {new Date().getFullYear()} Sunny Raj. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;