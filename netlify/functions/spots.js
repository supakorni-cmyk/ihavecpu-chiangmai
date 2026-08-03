import { getStore } from "@netlify/blobs";

const INITIAL_DATA = {
  "interiorLightBox": {
    "name": "Interior Lightbox",
    "layoutImages": ["images/IST2.jpg", "images/IST3.jpg", "images/IST4.jpg", "images/IST7.jpg", "images/IST10.jpg","images/IST11.jpg"],
    "spots": {
      "IST-1": { "name": "IST-1", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "IST-2": { "name": "IST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-3": { "name": "IST-3", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-4": { "name": "IST-4", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-5": { "name": "IST-5", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-6": { "name": "IST-6", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-7": { "name": "IST-7", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-8": { "name": "IST-8", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-9": { "name": "IST-9", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-10": { "name": "IST-10", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "IST-11": { "name": "IST-11", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" }
    }
  },
    "tableLightBox": {
    "name": "Table Lightbox",
    "layoutImages": ["images/IST7.jpg", "images/IST10.jpg"],
    "spots": {
      "TST-1": { "name": "TST-1", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "TST-2": { "name": "TST-2", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "TST-3": { "name": "TST-3", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "TST-4": { "name": "TST-4", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" }
    }
  },
  "interiorLogo": {
    "name": "Interior Logo",
    "layoutImages": ["images/14.jpg", "images/5.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg"],
    "spots": {
      "A1": { "name": "A1 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A2": { "name": "A2 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A3": { "name": "A3 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A4": { "name": "A4 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A5": { "name": "A5 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A6": { "name": "A6 - Monitor", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A7": { "name": "A7 - Case & Cooling", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A8": { "name": "A8 - Case & Cooling", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A9": { "name": "A9 - Case & Cooling", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A10": { "name": "A10 - Case & Cooling", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A11": { "name": "A11 - Case & Cooling", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A12": { "name": "A12 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A13": { "name": "A13 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A14": { "name": "A14 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A15": { "name": "A15 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A16": { "name": "A16 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A17": { "name": "A17 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A18": { "name": "A18 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A19": { "name": "A19 - DIY", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A20": { "name": "A20 - Gaming Gear", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A21": { "name": "A21 - Gaming Gear", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A22": { "name": "A22 - Gaming Gear", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A23": { "name": "A23 - Gaming Gear", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A24": { "name": "A24 - Gaming Gear", "size": "3m x 1.5m", "price": 50000, "status": "Available", "bookedBy": "" },
      "A25": { "name": "A25 - Accessory", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A26": { "name": "A26 - CPU", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" },
      "A27": { "name": "A27 - CPU", "size": "3m x 1.5m", "price": 40000, "status": "Available", "bookedBy": "" }
    }
  }
}

export default async (req) => {
    try {
        const spotsStore = getStore("spots");
        
        // 1. Fetch existing data from the database
        let adSpots = await spotsStore.get("spots-data", { type: "json" });

        // 2. ONLY initialize if the database is 100% empty
        if (!adSpots) {
            console.log("Database empty. Initializing default spots...");
            adSpots = INITIAL_DATA;
            await spotsStore.setJSON("spots-data", adSpots);
        }

        // 3. Return the data without modifying or overwriting anything
        return new Response(JSON.stringify(adSpots), { 
            status: 200,
            headers: { "Content-Type": "application/json" } 
        });
    } catch (error) {
        console.error("Error in spots.js:", error);
        return new Response(JSON.stringify({ message: "Error reading data" }), { status: 500 });
    }
};