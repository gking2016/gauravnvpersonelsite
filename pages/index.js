import clientPromise from "../lib/mongodb";
import vardb from "../Variables/vardb";
import ContactH from "../Components/ContactH";
export default function Home({ projects }) {
  vardb.push(projects);
  return (
    <div>
      <header className="Top_Section">
        <h1 style={{ textAlign: "center" }}>
          Welcome, To my
          <h1>Website</h1>
        </h1>
        <p>
          Lorem Dolor fugiat cupidatat duis ea reprehenderit consectetur esse
          consectetur consectetur velit ullamco deserunt. Duis pariatur nulla
          voluptate consequat incididunt officia sunt nisi sint.
        </p>

        <div>
          <button className="btn btn-primary">
            Explore <i class="fas fa-paper-plane"></i>
          </button>
          <a
            className="btn btn-secondary-outline"
            href="https://github.com/gking2016"
            target={"_blank"}
          >
            See GitHub<i className="fab fa-github"></i>
          </a>
        </div>
        <p>
          {" "}
          <br />
          <i className="fas fa-angle-double-down"></i>
        </p>
      </header>

      <main>
        <div className="Aboutme" data-aos="zoom-in-up" data-aos-duration="1500">
          <div className="content">
            <h1>About Me</h1>
            <h2>Gaurav N V</h2>
            <h5>Web developer, Software developer</h5>
            <p>
              Ad laborum aliquip nisi do occaecat nulla dolor aliqua. Do dolor
              cupidatat in nulla reprehenderit dolore irure id culpa excepteur.
              Officia fugiat consectetur labore adipisicing ea ullamco qui velit
              ex et.
            </p>
            <a href="/About">
              <span>Read more</span>
            </a>
          </div>

          <div>
            <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </main>

      <main
        className="Container2"
        data-aos="zoom-in-down"
        data-aos-duration="1500"
      >
        <h1 style={{ width: "100%", textAlign: "center" }}>My Projects</h1>
        <div className="Container">
          {projects.map((p, key) => {
            return (
              <div className="img_Card" key={key}>
                <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <h5>{key + 1 + ". " + p.title}</h5>
                <a href={p.project_link} target="_blank">
                  Readmore
                </a>
              </div>
            );
          })}
          <a
            href="/Projects"
            style={{
              width: "100%",
              textAlign: "right",
            }}
          >
            <h5>Read more</h5>
          </a>
        </div>
      </main>

      <footer data-aos="zoom-in-down" data-aos-duration="1500">
        <ContactH />
      </footer>
    </div>
  );
}
// let projectsk = [];
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

// export { projectsk };
