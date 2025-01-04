export const getCountdownTime = (targetTime) => {
    const currentTime = new Date().getTime();
    const target = new Date(targetTime).getTime();
    const timeDiff = target - currentTime;

    let obj = {}
    // if timeDiff is less than or equal to 0, return "Time's up!"
    if (timeDiff <= 0) {

        obj = {
            timestring: `Time's up!`,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        return obj;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    obj = {
        timestring: `${days}d ${hours}h ${minutes}m ${seconds}s`,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    }

    return obj;

};



export const formatResponse = (response, isSuccess) => {
    try {
        let status_code = null;

        // console.log("Format response ", response)
        // console.log("Format response status ", response.status)

        if (response === undefined) {
            return {
                status: false,
                message: "Seems like server is down, Please try again later",
                data: null,
            }
        }

        status_code = response && response.status ? response.status : 200

        // Django error response
        // {"details":"some message"}
        // if response has key detail 
        if (response?.data?.detail) {
            console.log("BLCOK 1")
            // TODO:  Need to handle invalid username or password, form valitation etc 

            return {
                status: false,
                message: response?.data?.detail || "An error occurred",
                data: response?.data || null,
                status_code: status_code
            };
        }
        else if (isSuccess) {
            console.log("BLCOK 2")

            if (response?.data?.Data) {
                console.log("BLCOK 3")
                // usually for POST request
                let message = response?.data?.Message
                if (message.includes("Unable to log in with provided credentials")) {
                    message = "Invalid Username or Password"
                }


                return {
                    status: response?.data?.Status,
                    message: message || "POST Request successful",
                    data: response?.data.Data || null,
                    status_code: status_code
                };
            } else {
                // For getting list of data from API
                console.log("BLCOK 4")
                return {
                    status: true,
                    message: response?.data?.message || "GET Request successful",
                    data: response?.data || null,
                    status_code: status_code
                };
            }


        }
        else {
            if (status_code === 404) {
                return {
                    status: false,
                    message: "Page not found",// for "+response?.config?.url || "Unknown url",
                    data: response?.data || null,
                    status_code: status_code
                };
            }
            else if (status_code === 400) {
                return {
                    status: false,
                    message: "Bad request, Make sure request is correct",// for "+response?.config?.url || "Unknown url",
                    data: response?.data || null,
                    status_code: status_code
                };
            } else if (status_code === 500) {
                return {
                    status: false,
                    message: "Internal server error, Please contact support",
                    data: response?.data || null,
                    status_code: status_code
                };
            }
            else {

                return {
                    status: false,
                    message: response?.data?.message || response?.statusText || "An error occurred",
                    data: response?.data || null,
                    status_code: status_code
                };
            }
        }
    }
    catch (error) {

        console.log("Unexpected error occurred while processing your request", error)
        return {
            status: false,
            message: "Unexpected error occurred while processing your request",
            data: null,
        }
    }
};


export const onChangeHandler = (e,data,setData) => {
    const { name, value, type, files  } = e.target;
    // console.log("Name:", name, "Value:", value, "Type:", type, "Files:", files);
    if (type === 'file') {
        // If the input type is 'file', we are dealing with file input, so we set the file object
        setData({
            ...data,
            [name]: files[0],  // Use the first file selected (files[0] is an array)
        });
    } else {
        // For regular text input or other types, just update the value
        setData({
            ...data,
            [name]: value,
        });
    }
};

export const handleResponseMessage = (status,error) => {
    // function to handle response message of solvitize backend api
    // console.log("Handle Error", status, error)
    let message = ""
    if(error.includes("name already exists")) {
        message = "Data with provided information already exists"
    }
    else if(error.includes("because they are referenced through protected foreign keys")) {
        message = "You cannot delete this data because it is referenced by other data"
    }
    else{
        message = error
    }

    console.log("Response message handler :",message)    
    return message
    
}