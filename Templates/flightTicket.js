import React, { useRef } from "react";
import { savePDF } from "@progress/kendo-react-pdf";
import { Button, Toast } from "..";
import moment from "moment";
import { StampTo24hr, StampToDate } from "../../../Utils/utils";
import { FiDownload } from "react-icons/fi";

function FlightTicket({ ticket = {} }) {
	const TICKET = useRef(null);

	const downloadPDF = () => {
		savePDF(TICKET.current, {
			paperSize: "auto",
			margin: 50,
			fileName: `Flight Ticket`,
		});
		Toast.success("Ticket Downloaded");
	};

	const { booking, passengers, amount, date, maker } = ticket;

	return (
		<>
			<div ref={TICKET} className="max-w-[900px] min-w-[700px] m-auto text-sm">
				<div className="p-12">
					<div className="flex-center-between bg-black p-6 rounded-lg text-white">
						<div className="align-center text-2xl font-bold">
							TPP
							<div className="w-4 h-4 rounded-full ml-4 bg-primary" />
						</div>
						<div className="text-2xl">Flight Booking</div>
					</div>
					<div className="bg-light p-6 mt-8 gap-6 rounded-lg">
						<div className="font-bold text-lg mb-6">Booking Details</div>
						<div className="flex-center-between">
							<div>
								<div className="font-bold mb-2">Booked by</div>
								<div>{maker?.email}</div>
							</div>
							<div>
								<div className="font-bold mb-2">Booked On</div>
								<div>{moment(date).format("DD MMM YYYY")}</div>
							</div>
							<div>
								<div className="font-bold mb-2">TPP ID</div>
								<div>{booking?.tripId}</div>
							</div>
							<div className="text-end">
								<div className="font-bold mb-2">Amount</div>
								<div>Rs. {amount}</div>
							</div>
						</div>
					</div>
					<div className="border p-6 rounded-lg mt-6">
						<div className="font-bold text-lg">Flight Details</div>
						{booking?.flights?.map(({ segments }) => {
							return segments.map((segment, j) => {
								const { airline, flightNumber, departureCode, departureAirport, departureTime, arrivalCode, arrivalAirport, arrivalTime, departureTerminal, arrivalTerminal, pnrs } = segment;
								return (
									<div key={j} className="flex justify-between items-start mt-6 gap-6">
										<div>
											<div className="font-bold">
												{airline}-{flightNumber}
											</div>
											<img src={`https://s3.ap-south-1.amazonaws.com/public-projectpay.in/airlines/${airline}.png`} alt="Airline" className="w-10 h-10 rounded-full mt-2" />
										</div>
										<div className="text-xs text-end">
											<div className="font-bold text-2xl mb-2">{departureCode}</div>
											<div>
												{StampTo24hr(departureTime)}, {StampToDate(departureTime)}
											</div>
											<div>
												Terminal {departureTerminal}
												<br />
												{departureAirport}
											</div>
										</div>
										<div className="flex-center flex-grow min-w-sm">
											<div className="align-center w-full mt-1">
												<div className="w-2 h-2 border rounded-full bg-light" />
												<div className="border border-dashed flex-grow" />
												<div className="text-center bg-light border text-xs rounded-full py-1 px-2 whitespace-nowrap">4hr 30m</div>
												<div className="border border-dashed flex-grow" />
												<div className="w-2 h-2 border rounded-full bg-light" />
											</div>
										</div>
										<div className="text-xs">
											<div className="font-bold text-2xl mb-2">{arrivalCode}</div>
											<div>
												{StampTo24hr(arrivalTime)}, {StampToDate(arrivalTime)}
											</div>
											<div>
												Terminal {arrivalTerminal}
												<br />
												{arrivalAirport}
											</div>
										</div>
										<div>
											<div className="font-bold">PNR</div>
											<div>{pnrs[0]?.pnr}</div>
										</div>
									</div>
								);
							});
						})}
					</div>
					<div className="border p-6 rounded-lg mt-5">
						<div className="font-bold text-lg">Traveller(s)</div>
						<table className="w-full mt-6">
							<tbody>
								<tr className="font-bold">
									<td>NAME</td>
									<td>GENDER</td>
									<td>EMAIL</td>
									<td>PHONE</td>
								</tr>
								{passengers?.map((passenger, i) => {
									const { fname, lname, email, phone, gender } = passenger;
									return (
										<tr key={i}>
											<td>
												{fname} {lname}
											</td>
											<td>{gender}</td>
											<td>{email}</td>
											<td>{phone}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className="mt-6 text-secondary text-xs">
						<b>Note:</b> The respective airlines will issue a separate GST invoice for their tickets showing the fare, tax and GST applied on the fare. Please download the same from the airline’s website. If you have purchased travel insurance, the insurance provider will issue a
						separate GST invoice for the same. <br />
						<br />
						Neospend Private Limited is committed to ensuring complete safety of your card details. We do not request for card details over an email or a phone call. Payments made on blinctrip.com will appear as Digital Blinc Technologies Pvt. Ltd. In your bank/card statements.
						<br />
						<br />
						This is an electronically generated invoice and does not require signature/stamp.
						<br />
						<br />
					</div>
					<div className="bg-light p-6 rounded-lg text-xs flex-center-between">
						<Button onClick={downloadPDF} variant="primary" className="btn-sm gap-2">
							<FiDownload /> Download as PDF
						</Button>
						<div>
							<b>For support</b> reach out to +91 8512862512, info@projectpay.in
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FlightTicket;
