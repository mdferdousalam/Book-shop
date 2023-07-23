export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            404 - Page Not Found
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <p className="text-center text-sm text-gray-500">
            The page you are looking for could not be found.
          </p>
        </div>
      </div>
    </div>
  );
}
