import { useRouter } from "next/router"
import styles from "../../styles/user.module.scss"
import MainContainer from "../../components/MainContainer"

export default function User({user}){
    const {query} = useRouter() //деструктуризация обьекта router для получения поля query в котором хранится id

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1> user with id: {query.id}</h1>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await responce.json()
    return {
        props: {user}, // props который примет компонент
    }
}