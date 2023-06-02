
export default function PostsLayout ({children}){
    return (
        <div>
            <marquee 
            style={{ background:'#fff',color:'purple'}}>
                Home &bull; Posts
            </marquee>
            {children}
        </div>
    )
}