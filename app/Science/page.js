import News from "../News/page"

const page = () => {
  return (
    <>
    <News setProgress='setProgress' pagesize={5} key="science" country="us" category="science"/>
    </>
  )
}

export default page