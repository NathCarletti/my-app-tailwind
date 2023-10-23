import {Text} from 'react-native';
import {styled} from "nativewind";

const TextStyled = styled(Text);

export default function TextIformation(props){
    return (
        <TextStyled className="text-orange-500">{props.title}</TextStyled>
    ) 
}