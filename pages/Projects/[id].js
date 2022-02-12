import clientPromise from "../../lib/mongodb";
import { useRouter } from "next/router";
function Details({ projects }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      {projects.map((p, key) => {
        if (p._id == id)
          return (
            <>
              <p style={{ textAlign: "center" }}>
                home <i class="fas fa-angle-right"></i> Projects{" "}
                <i class="fas fa-angle-right"></i>
                {p.title}
              </p>
              <div key={key} className="ProjectDetail">
                <div className="ProjectBody">
                  <h1>{key + 1 + ". " + p.title}</h1>
                  <p>{p.description}</p>
                  <a
                    className="btn btn-primary"
                    href={p.project_link}
                    target="_blank"
                  >
                    View Live <i class="fas fa-eye"></i>
                  </a>
                  <a
                    className="btn btn-secondary-outline"
                    href="https://github.com/gking2016"
                    target={"_blank"}
                  >
                    See Code<i className="fab fa-github"></i>
                  </a>
                </div>
                <img src={p.image} />
              </div>
            </>
          );
      })}
    </>
  );
}
export default Details;

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
