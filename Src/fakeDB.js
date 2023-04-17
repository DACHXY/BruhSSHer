import uuid from 'react-native-uuid'
const serverID = uuid.v4()

export const fakeTextCommandData = {
    id: uuid.v4(),
    CommandName: "ToggleHostSpot",
    Command: "start ./Documents/DN/CMD/ToggleHotSpot.bat",
    ButtonType: "Text",
    ShowOutput: false,
    Icon: "",
    Sequence: 1,
	ServerId: serverID
}

export const fakeIconCommandData = {
    id: uuid.v4(),
    CommandName: "Volumn Up",
    Command: "start ./Documents/DN/CMD/ToggleHotSpot.bat",
    ButtonType: "Icon",
    ShowOutput: false,
    Icon: "",
    Sequence: 0,
	ServerId: serverID
}

export const fakeServerData = {
    id: serverID,
    ServerName: "DN",
    HostIP: "localhost",
    Port: 22,
    Username: "danny",
    Password: "danny2024",
    Icon: "",
    Sequence: 0
}