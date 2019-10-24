import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const initialBlogs = [
    {
      title: "Woofer Blep",
      body:
        "Doggo ipsum thicc. long woofer. Heck h*ck big ol pupper fluffer, yapper fluffer. Doing me a frighten blep ur givin me a spook heckin good boys waggy wags wrinkler, very good spot pupper fat boi woofer blep."
    },
    {
      title: "Stop It Fren ",
      body:
        "waggy wags ur givin me a spook. Very jealous pupper adorable doggo smol borking doggo with a long snoot for pats very jealous pupper extremely cuuuuuute noodle horse, snoot stop it fren pupperino heckin angery woofer. Floofs vvv pupper yapper heckin good boys and girls, big ol shibe."
    },
    {
      title: "Smol Borking",
      body:
        "He made many woofs super chub ur givin me a spook blep the neighborhood pupper smol borking doggo with a long snoot for pats, blop waggy wags fluffer the neighborhood pupper."
    },
    {
      title: "Heckin Good",
      body:
        "Heckin good boys and girls long water shoob porgo stop it fren big ol pupper doing me a frighten, woofer noodle horse puggo. Wow such tempt maximum borkdrive floofs very jealous pupper woofer h*ck heckin good boys maximum borkdrive?"
    },
    {
      title: "Maximum Borkdrive",
      body:
        "doggorino tungg yapper, smol very good spot heck I am bekom fat. Length boy heckin borkf wow such tempt long bois very hand that feed shibe, woofer the neighborhood pupper fat boi you are doing me the shock. Heckin good boys wrinkler much ruin diet fat boi, stop it fren. Heckin angery woofer porgo super chub doge, long woofer."
    },
    {
      title: "Much Treat",
      body:
        "pupper fluffer borkdrive. H*ck what a nice floof big ol pupper blop stop it fren very taste wow blop, woofer much ruin diet heckin good boys mlem big ol. Stop it fren vvv woofer very taste wow boof, wow very biscit pupper very jealous pupper. doggo waggy wags shoob. Heckin good boys such treat blop floofs what a nice floof such treat, borkf length boy noodle horse pupperino."
    },
    {
      title: "Woofer Noodle",
      body:
        "What a nice floof doggorino fluffer borkf extremely cuuuuuute, puggo tungg long bois. Extremely cuuuuuute stop it fren maximum borkdrive, fat boi. Noodle horse much ruin diet adorable doggo!"
    }
  ];
  const [blogList, setBlogList] = useState(initialBlogs);
  const [title, setTitle] = useState("Woff Blep");
  const [body, setBody] = useState(
    "What a nice floof doggorino fluffer borkf extremely cuuuuuute, puggo tungg long bois. Extremely cuuuuuute stop it fren maximum borkdrive, fat boi. Noodle horse much ruin diet adorable doggo!"
  );

  const addBlog = () => {
    setBlogList([...blogList, { title, body }]);
  };

  return (
    <BlogContext.Provider value={{ data: blogList, addBlog: addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
