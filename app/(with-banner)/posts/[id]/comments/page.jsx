import Image from "next/image"
const fetchComments =async (id) =>{

        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,{
          next:{
            revalidate:60
          }
        })
        .then(res => res.json())
    } 

export default async function Post ({params}){
    const {id} =params
    const comments =await fetchComments(id)

    return (
      <ul style={{ background:'#888',fontSize:'10px'}}>
        {comments.map(comment =>(
            <li key={comment.id}>
               <Image width='50' height='50' src={`https://api.dicebear.com/6.x/lorelei/svg`} alt="wasap" />
                <h2>{comment.name}</h2>
                <p>{comment.body}</p>
           </li>
        ))}
      </ul>
    )
}