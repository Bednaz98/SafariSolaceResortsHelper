import DateTimePicker from '@react-native-community/datetimepicker';

export function RenderTimePicker(props:{value: Date, hide: Function, setTime: Function}){
    return(
        <DateTimePicker
        testID="dateTimePicker"
        value={props.value}
        mode={'time'}
        is24Hour={false}
        display="clock"
        onChange={(event, selectedTime: Date)=>{console.log("end on change",selectedTime.toLocaleTimeString()); props.hide(false); props.setTime(selectedTime)}}
    />) 
}

export function RenderDatePicker(props:{value: Date, hide: Function, setDate: Function}){
    return(
        <DateTimePicker
        testID="dateTimePicker"
        value={props.value}
        mode={'date'}
        is24Hour={false}
        display="default"
        onChange={(event, selectedTime: Date)=>{console.log("end on change",selectedTime.toLocaleTimeString()); props.hide(false); props.setDate(selectedTime)}}
    />) 
}