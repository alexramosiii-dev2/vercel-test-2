// const { connectToDatabase } = require("../lib/database");

// module.exports = async (req, res) => {
//     const db = await connectToDatabase();
//     const testCollection = await db.collection("testCollection");
//     const data = await testCollection.find({}).toArray();

// 	switch (req.method) {
// 		case "GET":
//             res.status(200).json(data);
//             break;//!important

//         case "POST":
//             console.log(req.body);

//             res.status(200).json();
//             break;//!important
// 		default:
// 			res.status(405).json({message: " Method Not Allowed"});
// 	}
// }

export async function POST(request) {
    const requestBody = await request.json();
}


// alternative way
// export async function GET(request) {
//     const url = new URL(request.url);
//     const params = Object.fromEntries(url.searchParams.entries());

//     const jsonResponse = JSON.stringify({ 
//         message: "GET request received",
//         params: params
//     });

//     return new Response(jsonResponse, {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
// }