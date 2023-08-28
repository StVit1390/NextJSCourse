import Link from "next/link"
import MainContainer from "../components/MainContainer"

const Users = ({users}) => { // те самые пропсы которые мы передали в getStaticProps
   

    return (
        <MainContainer keywords={'list'}>
            <h1>Users</h1>
            <ul>
                {users.map((user) => 
                    <li key={user.id}>
                        <Link legacyBehavior href={`/users/${user.id}`} >
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const responce = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await responce.json()
  
    return {
        props: {users}, // props который примет компонент
    }
}