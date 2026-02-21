const page = async ({params}: {params: Promise<{slug: string[]}>}) => {

    const {slug} = await params;

    if(slug?.length === 2){
        return (
            <h1 className="absolute left-[50%] top-[50%] text-6xl font-bold translate-x-[-50%] translate-y-[-50%] w-fit whitespace-nowrap">
                Slugs Page for {slug[1]} in {slug[0]}
            </h1>
        )
    }

    else if(slug?.length === 1){
        return (
            <h1 className="absolute left-[50%] top-[50%] text-6xl font-bold translate-x-[-50%] translate-y-[-50%] w-fit whitespace-nowrap">
                Slugs Page for {slug[0]}
            </h1>
        )
    }

    return ( 
        <h1 className="absolute left-[50%] top-[50%] text-6xl font-bold translate-x-[-50%] translate-y-[-50%]">Docs Main Page</h1>
    )
}

export default page
