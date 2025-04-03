import styled from "styled-components";


export const StyledLayout = styled.div`

nav{
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

/* 메뉴바 */
div.menuBar{
    padding: 28px 17px;
}
div.menuBar > a{
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding: 28px 17px 28px 17px;
}
div.menuBar > span{
    color: white;
}
div.menuBar > a:hover{
    color: #1ed760;
}

.container {
    background-color : black;
    height : 250px;
}

.last-line {
    text-align : center;
    color : white;
    margin-top : -150px
}
`