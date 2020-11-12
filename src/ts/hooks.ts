import { useState, useEffect, useRef, useContext } from "react";
import { Context } from "./store/Context";

// Custom hook for the logic of the modal for the books details.
export const useModal = () => {
	const [show, setShow] = useState<boolean>(false);
	const toggle = () => {
		setShow(!show);
		// This conditional is here to stop the scrolling in the background depending if the modal is showing or not.
		// It also checks the width of the screen to see if it varies when openning the modal, so when it is, the modal
		// doesnt affects the sizing of the page.
		if (!show && document.body.offsetWidth !== window.innerWidth) {
			document.body.style.width = `${document.body.offsetWidth}px`;
			document.body.style.overflow = "hidden";
		} else if (!show && document.body.offsetWidth === window.innerWidth) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.width = "";
			document.body.style.overflow = "";
		}
	};

	return {
		show,
		toggle
	};
};

// This Hook will track a keydown event and trigger an action with a callback. Everytime the key gets pressed
// the callback function gets triggered and effects de document. 
export const useKey = (key: number, callback: ()=>void) => {
    // We are using the Hook useRef to make sure that the stale callback reference is gone.
    const callbackRef = useRef(callback); 

    // After each render it will update the callback current value.
    useEffect(() => {
        callbackRef.current = callback;
    });

    useEffect(() => {
        // Here i'm checking if the key that i tied the event listener is being triggered, if it is triggers 
        // the callback.
        const handleEvent = (e: any) => {
            if (e.keyCode === key) {
                callbackRef.current();
            }
        }

        document.addEventListener("keydown", handleEvent); 
        //Here i'm making sure to clean the added event listener for the updated key.
        return () => document.removeEventListener("keydown", handleEvent);
    }, [key]);
};

export const useSearch = () => {
	const { actions } = useContext(Context);
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};
	
	// This use effect makes sure that the action of fetching the books gets done every time the search 
    // parameter changes, thats why search is between []. It also makes the fetch of data instantly when entered in
    // the App
	useEffect(() => {
		actions.setSearching(search);
		actions.fetchBooks(search);
	}, [search]);

	return {
        search,
        handleSearch
    };
};