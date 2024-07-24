import Button from "./button"
import Title from "./title"


export default function Menu() {

const itemsList = ['Home', 'Projects', 'Resume', 'Services', 'About Me']
  return (
    <section className="hidden sm:flex w-1/2 justify-around items-center " >
{itemsList.map((item,index)=>{
return(
    <Title key={index} title={item}/> 
)
})}
<Button Content="Contact Me"/>  
    </section>
  )
}
