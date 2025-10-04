function ProjectPage() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl bg-white text-black font-bold text-center sticky top-9">
        Pro
        <span
          className="text-white bg-gray-600"
          style={{ paddingInline: "5px" }}
        >
          Jects
        </span>
      </h1>
      <div className="grid grid-cols-4 gap-2 h-100" style={{ marginInline: "10%", marginBlock: "4%", padding: "1rem" }}>
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border-2 w-full bg-gray-400 rounded"
            style={{ marginTop: "5px" }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
