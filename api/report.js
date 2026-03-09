export default async function handler(req, res) {

  // simple in-memory storage (temporary)
  if (!global.reports) {
    global.reports = [];
  }

  // POST = submit report
  if (req.method === "POST") {

    const { location, disaster, description } = req.body || {};

    if (!location || !disaster || !description) {
      return res.status(400).json({
        message: "Missing required fields"
      });
    }

    const report = {
      id: Date.now(),
      location,
      disaster,
      description,
      time: new Date().toLocaleString()
    };

    global.reports.push(report);

    return res.status(200).json({
      message: "Report submitted",
      report
    });
  }

  // GET = fetch reports
  if (req.method === "GET") {
    return res.status(200).json(global.reports);
  }

  // method not allowed
  return res.status(405).json({
    message: "Method not allowed"
  });
}