import Action from "./Action"
import DateComponent from "./DateComponent"
import Menu from "./Menu"

function HeaderRoot(){

   

    return (
        <div className="bg-dark py-1 flex justify-between fixed w-screen">
            <Menu />
            <DateComponent />
            <Action />
        </div>
    )
}

export default HeaderRoot