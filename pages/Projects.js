import React from "react";
import clientPromise from "../lib/mongodb";
import Link from "next/link";

function Projects({ projects }) {
  // console.log(projects);
  return (
    <>
      <p style={{ textAlign: "center" }}>
        home <i class="fas fa-angle-right"></i> Projects
      </p>
      <h1 style={{ textAlign: "center", fontFamily: "Rubik, sans-serif" }}>
        Projects
      </h1>
      <div className="Container">
        {projects.map((p, key) => {
          return (
            <div className="img_Card" key={key}>
              <img src={p.image} />
              <h5>{key + 1 + ". " + p.title}</h5>
              <Link href={"/Projects/" + p._id} props={p}>
                Readmore
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("GauravNV");
    const data = await db.collection("Projects").find({}).toArray();
    // console.log(projects);
    const projects = JSON.parse(JSON.stringify(data));
    return {
      props: { projects },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
