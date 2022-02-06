function MyImage(props: { imagePath: string, imageAltText: string}){
    return <img src={props.imagePath} alt={props.imageAltText} />
   }
   export default MyImage
   