function AboutPage() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl text-black font-bold text-center sticky top-9">
        About{" "}
        <span
          className="text-white bg-gray-600"
          style={{ paddingInline: "5px" }}
        >
          Me
        </span>
      </h1>
      <div
        className="flex border-1 border-black h-fit rounded"
        style={{ marginInline: "10%", marginTop: "5%", padding: "1rem" }}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            quia deserunt voluptate rem! Ex vitae animi possimus corrupti
            necessitatibus dolore a sint velit ea, enim commodi temporibus
            laborum quos debitis.
          </p>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex w-full h-8 bg-gray-400 rounded" style={{marginTop: "5px"}}></div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutPage;
