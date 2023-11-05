import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"

import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/home";
import { About } from "./Components/about";
import { Contact } from "./Components/contact";
import "./SCSS/main.scss"


export const App = () => (
<ChakraProvider theme={theme}>
	<BrowserRouter>
	  		<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/About" element={<About/>} />
				<Route path="/Contact" element={<Contact/>} />
			</Routes>
	  </BrowserRouter>
</ChakraProvider>
)
