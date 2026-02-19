// Embedded Ramadan Data
const RAMADAN_DATA = {
    shakargarh: {
        name: "Shakargarh",
        country: "Pakistan",
        coords: { lat: 32.2716, lon: 75.1584 },
        schedule: [
            { "date": "2026-02-18", "sehar": "05:17", "duhr": "12:13", "asr": "16:09", "iftar": "17:48", "isha": "19:10" },
            { "date": "2026-02-19", "sehar": "05:16", "duhr": "12:13", "asr": "16:10", "iftar": "17:49", "isha": "19:11" },
            { "date": "2026-02-20", "sehar": "05:15", "duhr": "12:13", "asr": "16:11", "iftar": "17:49", "isha": "19:11" },
            { "date": "2026-02-21", "sehar": "05:14", "duhr": "12:13", "asr": "16:11", "iftar": "17:50", "isha": "19:12" },
            { "date": "2026-02-22", "sehar": "05:13", "duhr": "12:13", "asr": "16:12", "iftar": "17:51", "isha": "19:13" },
            { "date": "2026-02-23", "sehar": "05:12", "duhr": "12:13", "asr": "16:13", "iftar": "17:52", "isha": "19:14" },
            { "date": "2026-02-24", "sehar": "05:11", "duhr": "12:13", "asr": "16:13", "iftar": "17:53", "isha": "19:14" },
            { "date": "2026-02-25", "sehar": "05:10", "duhr": "12:12", "asr": "16:14", "iftar": "17:54", "isha": "19:15" },
            { "date": "2026-02-26", "sehar": "05:09", "duhr": "12:12", "asr": "16:15", "iftar": "17:54", "isha": "19:16" },
            { "date": "2026-02-27", "sehar": "05:08", "duhr": "12:12", "asr": "16:15", "iftar": "17:55", "isha": "19:17" },
            { "date": "2026-02-28", "sehar": "05:07", "duhr": "12:12", "asr": "16:16", "iftar": "17:56", "isha": "19:17" },
            { "date": "2026-03-01", "sehar": "05:06", "duhr": "12:13", "asr": "16:29", "iftar": "17:57", "isha": "19:18" },
            { "date": "2026-03-02", "sehar": "05:05", "duhr": "12:12", "asr": "16:29", "iftar": "17:57", "isha": "19:19" },
            { "date": "2026-03-03", "sehar": "05:04", "duhr": "12:12", "asr": "16:29", "iftar": "17:58", "isha": "19:20" },
            { "date": "2026-03-04", "sehar": "05:02", "duhr": "12:12", "asr": "16:30", "iftar": "17:59", "isha": "19:20" },
            { "date": "2026-03-05", "sehar": "05:01", "duhr": "12:12", "asr": "16:30", "iftar": "18:00", "isha": "19:21" },
            { "date": "2026-03-06", "sehar": "05:00", "duhr": "12:12", "asr": "16:31", "iftar": "18:01", "isha": "19:22" },
            { "date": "2026-03-07", "sehar": "04:59", "duhr": "12:11", "asr": "16:31", "iftar": "18:01", "isha": "19:23" },
            { "date": "2026-03-08", "sehar": "04:58", "duhr": "12:11", "asr": "16:31", "iftar": "18:02", "isha": "19:23" },
            { "date": "2026-03-09", "sehar": "04:56", "duhr": "12:11", "asr": "16:32", "iftar": "18:03", "isha": "19:24" },
            { "date": "2026-03-10", "sehar": "04:55", "duhr": "12:11", "asr": "16:32", "iftar": "18:04", "isha": "19:25" },
            { "date": "2026-03-11", "sehar": "04:54", "duhr": "12:10", "asr": "16:32", "iftar": "18:04", "isha": "19:26" },
            { "date": "2026-03-12", "sehar": "04:52", "duhr": "12:10", "asr": "16:33", "iftar": "18:05", "isha": "19:26" },
            { "date": "2026-03-13", "sehar": "04:51", "duhr": "12:10", "asr": "16:33", "iftar": "18:06", "isha": "19:27" },
            { "date": "2026-03-14", "sehar": "04:50", "duhr": "12:10", "asr": "16:33", "iftar": "18:06", "isha": "19:28" },
            { "date": "2026-03-15", "sehar": "04:49", "duhr": "12:09", "asr": "16:33", "iftar": "18:07", "isha": "19:29" },
            { "date": "2026-03-16", "sehar": "04:47", "duhr": "12:09", "asr": "16:34", "iftar": "18:08", "isha": "19:29" },
            { "date": "2026-03-17", "sehar": "04:46", "duhr": "12:09", "asr": "16:34", "iftar": "18:09", "isha": "19:30" },
            { "date": "2026-03-18", "sehar": "04:45", "duhr": "12:09", "asr": "16:34", "iftar": "18:09", "isha": "19:31" },
            { "date": "2026-03-19", "sehar": "04:43", "duhr": "12:08", "asr": "16:34", "iftar": "18:10", "isha": "19:32" },
            { "date": "2026-03-20", "sehar": "04:42", "duhr": "12:08", "asr": "16:34", "iftar": "18:11", "isha": "19:33" },
            { "date": "2026-03-21", "sehar": "04:41", "duhr": "12:08", "asr": "16:35", "iftar": "18:11", "isha": "19:33" },
            { "date": "2026-03-22", "sehar": "04:39", "duhr": "12:07", "asr": "16:35", "iftar": "18:12", "isha": "19:34" },
            { "date": "2026-03-23", "sehar": "04:38", "duhr": "12:07", "asr": "16:35", "iftar": "18:13", "isha": "19:35" },
            { "date": "2026-03-24", "sehar": "04:36", "duhr": "12:07", "asr": "16:35", "iftar": "18:13", "isha": "19:36" },
            { "date": "2026-03-25", "sehar": "04:35", "duhr": "12:06", "asr": "16:35", "iftar": "18:14", "isha": "19:36" },
            { "date": "2026-03-26", "sehar": "04:34", "duhr": "12:06", "asr": "16:35", "iftar": "18:15", "isha": "19:37" },
            { "date": "2026-03-27", "sehar": "04:32", "duhr": "12:06", "asr": "16:36", "iftar": "18:16", "isha": "19:38" },
            { "date": "2026-03-28", "sehar": "04:31", "duhr": "12:05", "asr": "16:36", "iftar": "18:16", "isha": "19:39" },
            { "date": "2026-03-29", "sehar": "04:29", "duhr": "12:05", "asr": "16:36", "iftar": "18:17", "isha": "19:40" },
            { "date": "2026-03-30", "sehar": "04:28", "duhr": "12:05", "asr": "16:36", "iftar": "18:18", "isha": "19:41" },
            { "date": "2026-03-31", "sehar": "04:27", "duhr": "12:05", "asr": "16:36", "iftar": "18:18", "isha": "19:41" }
        ]
    },
    sydney: {
        name: "Sydney",
        country: "Australia",
        coords: { lat: -33.8688, lon: 151.2093 },
        schedule: [
            { "date": "2026-02-18", "sehar": "05:05", "duhr": "13:10", "asr": "16:51", "iftar": "19:47", "isha": "21:11" },
            { "date": "2026-02-19", "sehar": "05:06", "duhr": "13:10", "asr": "16:50", "iftar": "19:46", "isha": "21:09" },
            { "date": "2026-02-20", "sehar": "05:07", "duhr": "13:10", "asr": "16:50", "iftar": "19:45", "isha": "21:08" },
            { "date": "2026-02-21", "sehar": "05:08", "duhr": "13:10", "asr": "16:49", "iftar": "19:44", "isha": "21:07" },
            { "date": "2026-02-22", "sehar": "05:10", "duhr": "13:10", "asr": "16:49", "iftar": "19:43", "isha": "21:05" },
            { "date": "2026-02-23", "sehar": "05:11", "duhr": "13:10", "asr": "16:49", "iftar": "19:42", "isha": "21:04" },
            { "date": "2026-02-24", "sehar": "05:12", "duhr": "13:10", "asr": "16:48", "iftar": "19:40", "isha": "21:02" },
            { "date": "2026-02-25", "sehar": "05:13", "duhr": "13:10", "asr": "16:48", "iftar": "19:39", "isha": "21:01" },
            { "date": "2026-02-26", "sehar": "05:14", "duhr": "13:09", "asr": "16:47", "iftar": "19:38", "isha": "21:00" },
            { "date": "2026-02-27", "sehar": "05:15", "duhr": "13:09", "asr": "16:47", "iftar": "19:37", "isha": "20:58" },
            { "date": "2026-02-28", "sehar": "05:16", "duhr": "13:09", "asr": "16:46", "iftar": "19:36", "isha": "20:57" },
            { "date": "2026-03-01", "sehar": "05:17", "duhr": "13:09", "asr": "16:46", "iftar": "19:34", "isha": "20:55" },
            { "date": "2026-03-02", "sehar": "05:18", "duhr": "13:09", "asr": "16:45", "iftar": "19:33", "isha": "20:54" },
            { "date": "2026-03-03", "sehar": "05:19", "duhr": "13:09", "asr": "16:44", "iftar": "19:32", "isha": "20:52" },
            { "date": "2026-03-04", "sehar": "05:21", "duhr": "13:08", "asr": "16:44", "iftar": "19:31", "isha": "20:51" },
            { "date": "2026-03-05", "sehar": "05:22", "duhr": "13:08", "asr": "16:43", "iftar": "19:29", "isha": "20:50" },
            { "date": "2026-03-06", "sehar": "05:23", "duhr": "13:08", "asr": "16:43", "iftar": "19:28", "isha": "20:48" },
            { "date": "2026-03-07", "sehar": "05:24", "duhr": "13:08", "asr": "16:42", "iftar": "19:27", "isha": "20:47" },
            { "date": "2026-03-08", "sehar": "05:25", "duhr": "13:07", "asr": "16:41", "iftar": "19:25", "isha": "20:45" },
            { "date": "2026-03-09", "sehar": "05:26", "duhr": "13:07", "asr": "16:41", "iftar": "19:24", "isha": "20:44" },
            { "date": "2026-03-10", "sehar": "05:27", "duhr": "13:07", "asr": "16:40", "iftar": "19:23", "isha": "20:42" },
            { "date": "2026-03-11", "sehar": "05:27", "duhr": "13:07", "asr": "16:39", "iftar": "19:22", "isha": "20:41" },
            { "date": "2026-03-12", "sehar": "05:28", "duhr": "13:06", "asr": "16:38", "iftar": "19:20", "isha": "20:39" },
            { "date": "2026-03-13", "sehar": "05:29", "duhr": "13:06", "asr": "16:38", "iftar": "19:19", "isha": "20:38" },
            { "date": "2026-03-14", "sehar": "05:30", "duhr": "13:06", "asr": "16:37", "iftar": "19:18", "isha": "20:37" },
            { "date": "2026-03-15", "sehar": "05:31", "duhr": "13:06", "asr": "16:36", "iftar": "19:16", "isha": "20:35" },
            { "date": "2026-03-16", "sehar": "05:32", "duhr": "13:05", "asr": "16:35", "iftar": "19:15", "isha": "20:34" },
            { "date": "2026-03-17", "sehar": "05:33", "duhr": "13:05", "asr": "16:34", "iftar": "19:14", "isha": "20:32" },
            { "date": "2026-03-18", "sehar": "05:34", "duhr": "13:05", "asr": "16:34", "iftar": "19:12", "isha": "20:31" }
        ]
    },
    lahore: {
        name: "Lahore",
        country: "Pakistan",
        coords: { lat: 31.5204, lon: 74.3587 },
        schedule: [
            { "date": "2026-03-01", "sehar": "05:09", "duhr": "12:15", "asr": "15:32", "iftar": "18:01", "isha": "19:17" },
            { "date": "2026-03-02", "sehar": "05:08", "duhr": "12:15", "asr": "15:33", "iftar": "18:02", "isha": "19:18" },
            { "date": "2026-03-03", "sehar": "05:07", "duhr": "12:15", "asr": "15:33", "iftar": "18:03", "isha": "19:19" },
            { "date": "2026-03-04", "sehar": "05:06", "duhr": "12:15", "asr": "15:34", "iftar": "18:03", "isha": "19:20" },
            { "date": "2026-03-05", "sehar": "05:05", "duhr": "12:15", "asr": "15:34", "iftar": "18:04", "isha": "19:21" },
            { "date": "2026-03-06", "sehar": "05:03", "duhr": "12:14", "asr": "15:34", "iftar": "18:05", "isha": "19:20" },
            { "date": "2026-03-07", "sehar": "05:02", "duhr": "12:14", "asr": "15:35", "iftar": "18:06", "isha": "19:21" },
            { "date": "2026-03-08", "sehar": "05:01", "duhr": "12:14", "asr": "15:35", "iftar": "18:06", "isha": "19:22" },
            { "date": "2026-03-09", "sehar": "05:00", "duhr": "12:14", "asr": "15:36", "iftar": "18:07", "isha": "19:23" },
            { "date": "2026-03-10", "sehar": "04:58", "duhr": "12:13", "asr": "15:35", "iftar": "18:08", "isha": "19:23" },
            { "date": "2026-03-11", "sehar": "04:57", "duhr": "12:13", "asr": "15:36", "iftar": "18:08", "isha": "19:24" },
            { "date": "2026-03-12", "sehar": "04:57", "duhr": "12:13", "asr": "15:36", "iftar": "18:09", "isha": "19:25" },
            { "date": "2026-03-13", "sehar": "04:56", "duhr": "12:13", "asr": "15:37", "iftar": "18:10", "isha": "19:26" },
            { "date": "2026-03-14", "sehar": "04:54", "duhr": "12:12", "asr": "15:36", "iftar": "18:10", "isha": "19:26" },
            { "date": "2026-03-15", "sehar": "04:53", "duhr": "12:12", "asr": "15:37", "iftar": "18:11", "isha": "19:27" },
            { "date": "2026-03-16", "sehar": "04:51", "duhr": "12:12", "asr": "15:37", "iftar": "18:12", "isha": "19:28" },
            { "date": "2026-03-17", "sehar": "04:49", "duhr": "12:11", "asr": "15:37", "iftar": "18:13", "isha": "19:28" },
            { "date": "2026-03-18", "sehar": "04:48", "duhr": "12:11", "asr": "15:37", "iftar": "18:13", "isha": "19:29" },
            { "date": "2026-03-19", "sehar": "04:47", "duhr": "12:11", "asr": "15:38", "iftar": "18:14", "isha": "19:30" },
            { "date": "2026-03-20", "sehar": "04:46", "duhr": "12:11", "asr": "15:38", "iftar": "18:15", "isha": "19:31" },
            { "date": "2026-03-21", "sehar": "04:44", "duhr": "12:10", "asr": "15:38", "iftar": "18:15", "isha": "19:31" },
            { "date": "2026-03-22", "sehar": "04:43", "duhr": "12:10", "asr": "15:38", "iftar": "18:16", "isha": "19:32" },
            { "date": "2026-03-23", "sehar": "04:42", "duhr": "12:10", "asr": "15:39", "iftar": "18:17", "isha": "19:34" },
            { "date": "2026-03-24", "sehar": "04:40", "duhr": "12:09", "asr": "15:38", "iftar": "18:17", "isha": "19:34" },
            { "date": "2026-03-25", "sehar": "04:39", "duhr": "12:09", "asr": "15:39", "iftar": "18:18", "isha": "19:35" },
            { "date": "2026-03-26", "sehar": "04:38", "duhr": "12:09", "asr": "15:39", "iftar": "18:19", "isha": "19:36" },
            { "date": "2026-03-27", "sehar": "04:36", "duhr": "12:08", "asr": "15:38", "iftar": "18:19", "isha": "19:36" },
            { "date": "2026-03-28", "sehar": "04:35", "duhr": "12:08", "asr": "15:39", "iftar": "18:20", "isha": "19:37" },
            { "date": "2026-03-29", "sehar": "04:34", "duhr": "12:08", "asr": "15:39", "iftar": "18:21", "isha": "19:38" },
            { "date": "2026-03-30", "sehar": "04:33", "duhr": "12:08", "asr": "15:40", "iftar": "18:21", "isha": "19:39" },
            { "date": "2026-03-31", "sehar": "04:31", "duhr": "12:07", "asr": "15:39", "iftar": "18:22", "isha": "19:39" }
        ]
    },
    london: {
        name: "London",
        country: "United Kingdom",
        coords: { lat: 51.5074, lon: -0.1278 },
        schedule: [
            { "date": "2026-02-18", "sehar": "05:30", "duhr": "12:19", "asr": "14:50", "iftar": "17:23", "isha": "18:51" },
            { "date": "2026-02-19", "sehar": "05:28", "duhr": "12:19", "asr": "14:52", "iftar": "17:25", "isha": "18:53" },
            { "date": "2026-02-20", "sehar": "05:26", "duhr": "12:19", "asr": "14:53", "iftar": "17:27", "isha": "18:55" },
            { "date": "2026-02-21", "sehar": "05:24", "duhr": "12:19", "asr": "14:54", "iftar": "17:29", "isha": "18:56" },
            { "date": "2026-02-22", "sehar": "05:23", "duhr": "12:19", "asr": "14:56", "iftar": "17:30", "isha": "18:58" },
            { "date": "2026-02-23", "sehar": "05:21", "duhr": "12:18", "asr": "14:57", "iftar": "17:32", "isha": "19:00" },
            { "date": "2026-02-24", "sehar": "05:19", "duhr": "12:18", "asr": "14:58", "iftar": "17:34", "isha": "19:02" },
            { "date": "2026-02-25", "sehar": "05:17", "duhr": "12:18", "asr": "15:00", "iftar": "17:36", "isha": "19:03" },
            { "date": "2026-02-26", "sehar": "05:15", "duhr": "12:18", "asr": "15:01", "iftar": "17:38", "isha": "19:05" },
            { "date": "2026-02-27", "sehar": "05:13", "duhr": "12:18", "asr": "15:02", "iftar": "17:39", "isha": "19:07" },
            { "date": "2026-02-28", "sehar": "05:11", "duhr": "12:18", "asr": "15:04", "iftar": "17:41", "isha": "19:09" },
            { "date": "2026-03-01", "sehar": "05:09", "duhr": "12:17", "asr": "15:05", "iftar": "17:43", "isha": "19:10" },
            { "date": "2026-03-02", "sehar": "05:07", "duhr": "12:17", "asr": "15:06", "iftar": "17:45", "isha": "19:12" },
            { "date": "2026-03-03", "sehar": "05:05", "duhr": "12:17", "asr": "15:07", "iftar": "17:46", "isha": "19:14" },
            { "date": "2026-03-04", "sehar": "05:03", "duhr": "12:17", "asr": "15:09", "iftar": "17:48", "isha": "19:16" },
            { "date": "2026-03-05", "sehar": "05:01", "duhr": "12:17", "asr": "15:10", "iftar": "17:50", "isha": "19:17" },
            { "date": "2026-03-06", "sehar": "04:59", "duhr": "12:16", "asr": "15:11", "iftar": "17:52", "isha": "19:19" },
            { "date": "2026-03-07", "sehar": "04:57", "duhr": "12:16", "asr": "15:12", "iftar": "17:53", "isha": "19:21" },
            { "date": "2026-03-08", "sehar": "04:55", "duhr": "12:16", "asr": "15:13", "iftar": "17:55", "isha": "19:23" },
            { "date": "2026-03-09", "sehar": "04:53", "duhr": "12:16", "asr": "15:14", "iftar": "17:57", "isha": "19:24" },
            { "date": "2026-03-10", "sehar": "04:50", "duhr": "12:15", "asr": "15:16", "iftar": "17:59", "isha": "19:26" },
            { "date": "2026-03-11", "sehar": "04:48", "duhr": "12:15", "asr": "15:17", "iftar": "18:00", "isha": "19:28" },
            { "date": "2026-03-12", "sehar": "04:46", "duhr": "12:15", "asr": "15:18", "iftar": "18:02", "isha": "19:30" },
            { "date": "2026-03-13", "sehar": "04:44", "duhr": "12:15", "asr": "15:19", "iftar": "18:04", "isha": "19:32" },
            { "date": "2026-03-14", "sehar": "04:42", "duhr": "12:14", "asr": "15:20", "iftar": "18:05", "isha": "19:33" },
            { "date": "2026-03-15", "sehar": "04:39", "duhr": "12:14", "asr": "15:21", "iftar": "18:07", "isha": "19:35" },
            { "date": "2026-03-16", "sehar": "04:37", "duhr": "12:14", "asr": "15:22", "iftar": "18:09", "isha": "19:37" },
            { "date": "2026-03-17", "sehar": "04:35", "duhr": "12:13", "asr": "15:23", "iftar": "18:10", "isha": "19:39" },
            { "date": "2026-03-18", "sehar": "04:33", "duhr": "12:13", "asr": "15:24", "iftar": "18:12", "isha": "19:41" },
            { "date": "2026-03-19", "sehar": "04:30", "duhr": "12:13", "asr": "15:25", "iftar": "18:14", "isha": "19:43" },
            { "date": "2026-03-20", "sehar": "04:28", "duhr": "12:13", "asr": "15:26", "iftar": "18:15", "isha": "19:44" },
            { "date": "2026-03-21", "sehar": "04:26", "duhr": "12:12", "asr": "15:27", "iftar": "18:17", "isha": "19:46" },
            { "date": "2026-03-22", "sehar": "04:23", "duhr": "12:12", "asr": "15:28", "iftar": "18:19", "isha": "19:48" },
            { "date": "2026-03-23", "sehar": "04:21", "duhr": "12:12", "asr": "15:29", "iftar": "18:20", "isha": "19:50" },
            { "date": "2026-03-24", "sehar": "04:19", "duhr": "12:11", "asr": "15:30", "iftar": "18:22", "isha": "19:52" },
            { "date": "2026-03-25", "sehar": "04:16", "duhr": "12:11", "asr": "15:31", "iftar": "18:24", "isha": "19:54" },
            { "date": "2026-03-26", "sehar": "04:14", "duhr": "12:11", "asr": "15:32", "iftar": "18:25", "isha": "19:56" },
            { "date": "2026-03-27", "sehar": "04:11", "duhr": "12:10", "asr": "15:33", "iftar": "18:27", "isha": "19:58" },
            { "date": "2026-03-28", "sehar": "04:09", "duhr": "12:10", "asr": "15:34", "iftar": "18:29", "isha": "20:00" },
            { "date": "2026-03-29", "sehar": "05:07", "duhr": "13:09", "asr": "16:35", "iftar": "19:30", "isha": "21:01" },
            { "date": "2026-03-30", "sehar": "05:04", "duhr": "13:09", "asr": "16:36", "iftar": "19:32", "isha": "21:03" },
            { "date": "2026-03-31", "sehar": "05:02", "duhr": "13:09", "asr": "16:37", "iftar": "19:34", "isha": "21:05" }
        ]
    }
};
 
class RamadanApp {
    constructor() {
        this.canvas = document.getElementById('skyCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.currentCity = 'shakargarh';
        this.stars = [];
        this.colors = {
            night: { top: '#0a0f1e', bottom: '#1a1f3a' },
            dawn: { top: '#2d1b69', bottom: '#ff9a9e' },
            day: { top: '#1e3c72', bottom: '#2a5298' },
            evening: { top: '#4a1c40', bottom: '#d4a574' }
        };
        
        this.init();
    }
    
    init() {
        this.setupCanvas();
        this.createStars();
        this.setupEventListeners();

        // If user previously selected a city, use it
        const saved = localStorage.getItem('selectedCity');
        if (saved && RAMADAN_DATA[saved]) {
            this.currentCity = saved;
            const sel = document.getElementById('citySelect');
            if (sel) sel.value = saved;
        }

        // Update overlay that shows country-only when closed
        this.updateCityOverlay();

        // Start silent IP detection (may override or suggest)
        this.detectByIP();

        // Load initial city schedule
        this.loadCity(this.currentCity);
        
        // Start loop
        this.update();
        
        // Hide loader
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
        }, 1000);
    }
    
    setupCanvas() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createStars();
    }
    
    createStars() {
        this.stars = [];
        const count = Math.min(150, (this.canvas.width * this.canvas.height) / 10000);
        for (let i = 0; i < count; i++) {
            this.stars.push({
                x: Math.random(),
                y: Math.random() * 0.7,
                size: Math.random() * 2 + 0.5,
                brightness: Math.random(),
                twinkleSpeed: 0.001 + Math.random() * 0.002,
                phase: Math.random() * Math.PI * 2
            });
        }
    }
    
    setupEventListeners() {
        document.getElementById('citySelect').addEventListener('change', (e) => {
            this.currentCity = e.target.value;
            this.loadCity(this.currentCity);
            // persist manual override
            try { localStorage.setItem('selectedCity', this.currentCity); } catch (e) {}
            // update overlay country text
            this.updateCityOverlay();
        });

        // show full "City, Country" while the select is focused/open
        const sel = document.getElementById('citySelect');
        if (sel) {
            sel.addEventListener('focus', () => this.updateCityOverlay(true));
            sel.addEventListener('blur', () => this.updateCityOverlay(false));
        }

        // Suggestion buttons
        const yes = document.getElementById('suggestYes');
        const no = document.getElementById('suggestNo');
        if (yes) yes.addEventListener('click', () => {
            const key = sessionStorage.getItem('locationSuggestionKey');
            if (key && RAMADAN_DATA[key]) {
                this.applyDetectedCity(key, true);
            }
            this.hideSuggestion();
        });
        if (no) no.addEventListener('click', () => {
            // remember dismissal for this session
            sessionStorage.setItem('locationSuggestionDismissed', '1');
            this.hideSuggestion();
        });
    }

    updateCityOverlay(showFull=false) {
        try {
            const sel = document.getElementById('citySelect');
            const overlay = document.getElementById('cityOverlay');
            if (!sel || !overlay) return;
            const opt = sel.options[sel.selectedIndex];
            if (!opt) { overlay.textContent = ''; return; }

            const fullText = (opt.text || '').trim(); // "City, Country"
            const cityOnly = (opt.text || '').split(',')[0].trim();

            overlay.textContent = showFull ? fullText : cityOnly;
        } catch (e) {}
    }

    async detectByIP() {
        // Do not show suggestion if user already dismissed this session
        if (sessionStorage.getItem('locationSuggestionDismissed')) return;

        try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 4000);
            // Use ipapi.co for silent IP detection
            const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
            clearTimeout(timeout);
            if (!res.ok) return;
            const data = await res.json();
            // Normalize ipapi response to shape expected by handleIPInfo
            // ipapi returns fields like: city, region, country_name, latitude, longitude
            const lat = data.latitude || data.lat || null;
            const lon = data.longitude || data.lon || null;
            const loc = (lat && lon) ? `${lat},${lon}` : (data.loc || '');
            const info = {
                city: data.city || '',
                region: data.region || '',
                country: data.country_name || data.country || '',
                loc,
                ip: data.ip || data.ip_address || ''
            };
            this.handleIPInfo(info);
        } catch (e) {
            // silent fail
        }
    }

    handleIPInfo(info) {
        // show Urdu footer for first time per IP
        try { this.showUrduFooterIfFirstTime(info); } catch (e) {}

        if (!info) return;
        const ipCity = info.city || '';
        const loc = info.loc || ''; // "lat,lon"

        // Try exact match by name
        const exact = this.findExactMatch(ipCity);
        if (exact) {
            // If matches current selection, nothing to do
            if (exact !== this.currentCity) this.applyDetectedCity(exact, true);
            return;
        }

        // Try coords-based match
        if (loc) {
            const [latStr, lonStr] = loc.split(',');
            const lat = parseFloat(latStr);
            const lon = parseFloat(lonStr);
            if (!isNaN(lat) && !isNaN(lon)) {
                const nearest = this.findNearestByCoords(lat, lon);
                if (nearest && nearest.key) {
                    // Auto-apply if very close (<50 km)
                    if (nearest.dist <= 50) {
                        if (nearest.key !== this.currentCity) this.applyDetectedCity(nearest.key, true);
                        return;
                    }
                    // Suggest if moderately close (<200 km)
                    if (nearest.dist <= 200) {
                        this.showSuggestion(nearest.key);
                        return;
                    }
                }
            }
        }
        // otherwise, do nothing
    }

    findExactMatch(cityName) {
        if (!cityName) return null;
        const target = cityName.trim().toLowerCase();
        for (const key in RAMADAN_DATA) {
            if (RAMADAN_DATA.hasOwnProperty(key)) {
                const dname = (RAMADAN_DATA[key].name || '').toString().trim().toLowerCase();
                if (dname === target) return key;
            }
        }
        // Also check visible select option labels
        const sel = document.getElementById('citySelect');
        if (sel) {
            for (const opt of sel.options) {
                if ((opt.text || '').trim().toLowerCase().startsWith(target)) return opt.value;
            }
        }
        return null;
    }

    haversineDistance(lat1, lon1, lat2, lon2) {
        // returns kilometers
        const toRad = (v) => v * Math.PI / 180;
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLon = toRad(lon2 - lon1);
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                  Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                  Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }

    findNearestByCoords(lat, lon) {
        let best = { key: null, dist: Infinity };
        for (const key in RAMADAN_DATA) {
            if (!RAMADAN_DATA.hasOwnProperty(key)) continue;
            const c = RAMADAN_DATA[key].coords;
            if (!c) continue;
            const d = this.haversineDistance(lat, lon, c.lat, c.lon);
            if (d < best.dist) best = { key, dist: d };
        }
        return best;
    }

    showSuggestion(key) {
        if (!key || !RAMADAN_DATA[key]) return;
        // if user already dismissed this session, don't show
        if (sessionStorage.getItem('locationSuggestionDismissed')) return;

        const el = document.getElementById('locationSuggestion');
        const txt = document.getElementById('suggestionText');
        if (el && txt) {
            txt.textContent = `We think you're near ${RAMADAN_DATA[key].name}. Is this correct?`;
            el.style.display = 'block';
            sessionStorage.setItem('locationSuggestionKey', key);
        }
    }

    hideSuggestion() {
        const el = document.getElementById('locationSuggestion');
        if (el) el.style.display = 'none';
        sessionStorage.removeItem('locationSuggestionKey');
    }

    applyDetectedCity(key, autoApply=false) {
        if (!key || !RAMADAN_DATA[key]) return;
        this.currentCity = key;
        const sel = document.getElementById('citySelect');
        if (sel) sel.value = key;
        this.loadCity(key);
        // Persist choice if auto-applied or user accepted suggestion
        if (autoApply) {
            try { localStorage.setItem('selectedCity', key); } catch (e) {}
        }
    }

    showUrduFooterIfFirstTime(info) {
        if (!info || !info.ip) return;
        try {
            const ip = info.ip.toString();
            const key = 'urduFooterSeen_' + ip;
            if (localStorage.getItem(key)) return; // already shown for this IP
            // mark shown
            try { localStorage.setItem(key, String(Date.now())); } catch (e) {}
            // reveal footer
            const footer = document.querySelector('.urdu-footer');
            if (footer) footer.classList.add('visible');
        } catch (e) {}
    }
    
    loadCity(cityKey) {
        this.schedule = RAMADAN_DATA[cityKey].schedule;
        this.cityName = RAMADAN_DATA[cityKey].name;
    }
    
    getTodayData() {
        const today = new Date().toISOString().split('T')[0];
        return this.schedule.find(e => e.date === today) || this.schedule[0];
    }
    
    parseTime(timeStr, baseDate) {
        const [hours, minutes] = timeStr.split(':').map(Number);
        const date = new Date(baseDate);
        date.setHours(hours, minutes, 0, 0);
        return date;
    }
    
    findNextPrayer(now, times) {
        const prayers = [
            { name: 'Sehar', key: 'sehar', icon: '🌅' },
            { name: 'Duhr', key: 'duhr', icon: '☀️' },
            { name: 'Asr', key: 'asr', icon: '🌤️' },
            { name: 'Iftar', key: 'iftar', icon: '🌇' },
            { name: 'Isha', key: 'isha', icon: '🌙' }
        ];
        
        for (let prayer of prayers) {
            const prayerTime = times[prayer.key];
            if (now < prayerTime) {
                return { ...prayer, time: prayerTime };
            }
        }
        // If all passed, next is tomorrow's Sehar
        const tomorrow = new Date(times.sehar);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return { name: "Tomorrow's Sehar", key: 'sehar', icon: '🌅', time: tomorrow };
    }
    
    updateSky(phase, progress) {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Background
        let top = this.colors[phase].top;
        let bottom = this.colors[phase].bottom;
        
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, top);
        grad.addColorStop(1, bottom);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        
        // Stars
        if (phase === 'night' || phase === 'dawn') {
            const opacity = phase === 'night' ? 1 : 0.5;
            this.drawStars(opacity);
        }
        
        if (phase === 'night') this.drawMoon();
        
        // Sun (only during day/evening, and within fasting hours)
        if ((phase === 'day' || phase === 'evening') && progress >= 0 && progress <= 1) {
            this.drawSun(progress);
        }
        
        this.drawMosque();
        this.updateLanterns(phase === 'night' || phase === 'evening');
    }
    
    drawStars(opacity) {
        const ctx = this.ctx;
        const time = Date.now();
        ctx.save();
        this.stars.forEach(star => {
            const twinkle = 0.7 + 0.3 * Math.sin(time * star.twinkleSpeed + star.phase);
            ctx.globalAlpha = star.brightness * twinkle * opacity;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(star.x * this.canvas.width, star.y * this.canvas.height, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();
    }
    
    drawMoon() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const x = w * 0.85;
        const y = h * 0.15;
        const r = Math.min(30, w * 0.05);
        
        ctx.save();
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 20;
        ctx.fillStyle = '#fffbe3';
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x + r * 0.3, y - r * 0.1, r * 0.85, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
        ctx.restore();
    }
    
    drawSun(progress) {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const centerX = w / 2;
        const centerY = h * 0.85;
        const radius = Math.min(w * 0.35, h * 0.4);
        
        // Sun position based on progress (0-1) from left to right along an arc
        // We want the sun to move from left horizon to right horizon.
        // Using angle from -90° to +90° (left to right)
        const angle = -Math.PI / 2 + progress * Math.PI;
        const sunX = centerX + radius * Math.cos(angle);
        const sunY = centerY - radius * Math.sin(angle);
        
        ctx.save();
        const gradient = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, 35);
        gradient.addColorStop(0, 'rgba(255, 255, 200, 1)');
        gradient.addColorStop(0.3, 'rgba(255, 215, 0, 0.6)');
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(sunX, sunY, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffc857';
        ctx.beginPath();
        ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    
    drawMosque() {
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        const baseY = h * 0.88;
        
        ctx.save();
        ctx.fillStyle = 'rgba(10, 8, 15, 0.5)';
        
        // Dome
        ctx.beginPath();
        ctx.arc(w * 0.5, baseY - 40, 35, Math.PI, 0);
        ctx.lineTo(w * 0.5 - 45, baseY);
        ctx.lineTo(w * 0.5 + 45, baseY);
        ctx.closePath();
        ctx.fill();
        
        // Minarets
        ctx.fillStyle = 'rgba(10, 8, 15, 0.5)';
        ctx.fillRect(w * 0.3, baseY - 100, 12, 100);
        ctx.fillRect(w * 0.68, baseY - 100, 12, 100);
        
        // Base
        ctx.fillRect(w * 0.25, baseY - 20, w * 0.5, 20);
        ctx.restore();
    }
    
    updateLanterns(show) {
        document.querySelectorAll('.lantern').forEach(l => {
            l.classList.toggle('visible', show);
        });
    }
    
    update() {
        const now = new Date();
        const data = this.getTodayData();
        const baseDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        // Parse all times
        const times = {
            sehar: this.parseTime(data.sehar, baseDate),
            duhr: this.parseTime(data.duhr, baseDate),
            asr: this.parseTime(data.asr, baseDate),
            iftar: this.parseTime(data.iftar, baseDate),
            isha: this.parseTime(data.isha, baseDate)
        };
        
        // Update date
        document.getElementById('dateDisplay').textContent = now.toLocaleDateString('en-US', { 
            weekday: 'short', month: 'short', day: 'numeric' 
        });
        
        // Update all displays
        ['sehar', 'duhr', 'asr', 'iftar', 'isha'].forEach(prayer => {
            document.getElementById(`display-${prayer}`).textContent = data[prayer];
            document.getElementById(`time-${prayer}`).textContent = data[prayer];
        });
        
        // Find next prayer
        const next = this.findNextPrayer(now, times);
        const diff = next.time - now;
        const hours = Math.floor(diff / 3600000);
        const mins = Math.floor((diff % 3600000) / 60000);
        const secs = Math.floor((diff % 60000) / 1000);
        
        // Update next prayer card
        document.getElementById('nextPrayerName').textContent = next.name;
        document.getElementById('nextPrayerIcon').textContent = next.icon;
        document.getElementById('nextPrayerCountdown').textContent = 
            `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        document.getElementById('nextPrayerSub').textContent = 
            next.key === 'sehar' && next.name.includes("Tomorrow") ? 'Until Sehar' : `Until ${next.name}`;
        
        // Determine phase and progress
        let phase = 'night';
        let progress = 0;
        
        if (now < times.sehar) {
            phase = 'night';
            progress = 0;
        } else if (now >= times.sehar && now < times.duhr) {
            phase = 'dawn';
            progress = (now - times.sehar) / (times.iftar - times.sehar);
        } else if (now >= times.duhr && now < times.asr) {
            phase = 'day';
            progress = (now - times.sehar) / (times.iftar - times.sehar);
        } else if (now >= times.asr && now < times.iftar) {
            phase = 'evening';
            progress = (now - times.sehar) / (times.iftar - times.sehar);
        } else if (now >= times.iftar && now < times.isha) {
            phase = 'evening';
            progress = 1; // after iftar, sun is set, but we may still show evening sky
        } else {
            phase = 'night';
            progress = 1; // after isha, night
        }
        
        // Clamp progress between 0 and 1
        progress = Math.min(Math.max(progress, 0), 1);
        
        // Update sky
        this.updateSky(phase, progress);
        
        // Update progress bar and percent
        const percent = Math.round(progress * 100);
        document.getElementById('progressFill').style.width = percent + '%';
        document.getElementById('progressPercent').textContent = percent + '%';
        
        // Update phase indicator
        document.getElementById('phaseIndicator').textContent = 
            phase.charAt(0).toUpperCase() + phase.slice(1);
        
        // Update milestone dots
        const prayers = ['sehar', 'duhr', 'asr', 'iftar', 'isha'];
        prayers.forEach((prayer, index) => {
            const dot = document.getElementById(`dot-${prayer}`);
            const prayerTime = times[prayer];
            if (now >= prayerTime) {
                dot.classList.add('completed');
                dot.classList.remove('active');
            } else if (prayer === next.key && !next.name.includes("Tomorrow")) {
                dot.classList.add('active');
                dot.classList.remove('completed');
            } else {
                dot.classList.remove('active', 'completed');
            }
        });
        
        // Highlight the active prayer card
        prayers.forEach(prayer => {
            const card = document.getElementById(`card-${prayer}`);
            if (card) {
                if (prayer === next.key && !next.name.includes("Tomorrow")) {
                    card.classList.add('active');
                } else if (now >= times[prayer]) {
                    card.classList.add('completed');
                } else {
                    card.classList.remove('active', 'completed');
                }
            }
        });
        
        requestAnimationFrame(() => this.update());
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new RamadanApp();
});