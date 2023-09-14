<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Raleway:ital,wght@1,300&display=swap');

</style>
export const wrapper=(dark)=>({
    width:'100%',
    minHeight:"100vh",
    backgroundColor: dark ? "black" :"#77737399",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    color:dark ? 'white':'black',
    fontFamily: "'Montserrat','Raleway', sans-serif "
    

})
export const container={
    width:'50%',
    maxHeight:"100%",
    padding:"20px",
}
export const styledLabel={
    fontWeight:'600',
    fontSize:"20px",
    fontFamily: "'Montserrat','Raleway', sans-serif "

}
export const button={
    fontWeight:'600',
    width:"100%",
    backgroundColor:"blue"

}

export const formControl={
    height:'50px',
    outline:"none",
    inner:"none",
    '&:focus': {
        outline: '1px solid green', // Remove the outline on focus
        border:"none",
      },
}
export const warning=(dark)=>({
    fontSize:"18px",
    fontWeight:'600',
    color:dark? "white":"#000000"
})