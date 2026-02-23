import Link from "next/link"

const page = async ({params , searchParams} : {params: Promise<{articleid: string}> , searchParams: Promise<{lang ?: string}>}) => {
    const id = (await params).articleid
    const lang = (await searchParams).lang
  return (
    <div>
      <h1 className="font-bold text-2xl">Article for {id} <span className="text-sm ml-20">Reading {lang=="es" ? "in Spanish" : "in English"}</span></h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quisquam alias laboriosam minus eligendi tenetur, temporibus cum ab sint perspiciatis consectetur commodi deleniti ullam cupiditate repudiandae, similique tempore unde doloribus?
        Quae, eaque ipsam nulla amet voluptas laboriosam omnis esse asperiores? Molestiae, beatae incidunt dolorem aspernatur non quod repellat maiores ipsam iure nulla provident praesentium quae, placeat accusantium illum reiciendis quasi!
        Neque sapiente consectetur fugit provident maxime in eveniet perferendis autem, repellendus dolorum molestias quos ipsam odit, reiciendis iusto dolorem cupiditate inventore quas est nostrum deleniti nulla expedita. Odit, asperiores. Error.
        Quos, autem modi. Officia saepe totam sunt. Amet sapiente, labore reiciendis porro rem nisi dignissimos harum, temporibus exercitationem et ducimus velit dolorem ullam doloremque ab repudiandae odio quod accusantium animi.
        Illum ducimus earum totam tenetur culpa! Commodi quasi dolor earum tenetur expedita tempora ratione, ullam laudantium fuga necessitatibus nam? Libero error animi maiores esse suscipit tempora distinctio obcaecati, non perspiciatis.
        Eius consectetur soluta, possimus natus explicabo voluptates repudiandae aliquam sapiente, vitae harum quisquam sed atque sequi perspiciatis, repellendus libero praesentium sunt quo dolorum? Molestias, totam sapiente sit ea eaque unde.
        Iure soluta necessitatibus assumenda molestiae asperiores blanditiis quisquam accusamus modi nostrum. Veniam amet repellendus nulla voluptatem nostrum? Accusantium mollitia nisi reprehenderit quam, nesciunt amet, voluptatem repellendus iusto ea obcaecati nam?
        Illo placeat obcaecati dignissimos velit, molestias quas dicta distinctio laboriosam veritatis alias laudantium aperiam facere, repellendus nesciunt cum ipsa similique praesentium, hic aliquam error modi esse possimus? Veniam, sunt obcaecati?
        Esse, eos illo hic corrupti, totam libero iusto odio dolore quidem harum molestiae aliquid sequi optio nemo perferendis, adipisci deleniti debitis qui. Temporibus eum officiis odio sint iste hic ad?
        Dignissimos laudantium veritatis natus non aliquid! Cupiditate molestiae enim quod, culpa tenetur illum repudiandae, animi sint maxime dolor est eveniet omnis! Rem magni in laborum iusto id accusantium repellat quia.
      </p>
    </div>
  )
}

export default page
