import BlogNavbar from "@/app/components/BlogNavbar";

const page = async ({params} : {params: {blogId: number}}) => {
    const blogId = (await params).blogId;

    const randomNumber = Math.floor(Math.random() * 100);

    if(randomNumber > 50){

        throw new Error("Random Number is Greater than 50.")
    }   

    return (
        <div>
            <BlogNavbar />
            <h1 className="absolute top-[50%] left-[50%] translate-[-50%] font-bold text-8xl">Blogs for Page {blogId}</h1>  
        </div>
    )
}

export default page
