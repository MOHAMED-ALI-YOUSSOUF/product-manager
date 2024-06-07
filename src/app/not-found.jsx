import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-4">
          <img src="/images/404.png" alt="img-error" className="img-fluid" />
        </div>
        <div className="col-md-4 d-flex flex-column pt-4 text-center">
          <h2 className="text-primary fs-1">Not Found</h2>
          <p>The page you requested was not found</p>
          <Link href="/">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
