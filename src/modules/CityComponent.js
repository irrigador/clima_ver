import styled from 'styled-components'

const Iframe =styled.iframe`
    width: 100%;
    height: 100%;
    margin: 100px auto;
`;

const ChooseCityLabel =styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;

const SearchBox =styled.form`
    display: flex;
    flex-direction: row; 
    border: LightGrey solid 1px;
    border-radius: 2px;
    color: black;
    margin: 20px auto;
    & input {
        padding:10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }
    & button {
        padding:10px;
        font-size: 14px;
        color: white;
        background-color: LightSteelBlue;
        border: none;
        border-radius: 2px;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`;



const CityComponent = (props) => {
    const {updateCity, fetchWeather} = props;
    return ( 
      <>  
         <> <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58942953.12164798!2d-15.449342344243131!3d25.618458731268113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1632551317419!5m2!1spt-BR!2sbr"></iframe></>
       <br /> <ChooseCityLabel> Your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City"
            onChange={(e) => updateCity (e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>

    );
}; 

export default CityComponent;