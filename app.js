


// ══════════════════════════════════════════════════════════════
// PERIOD TIMES — 50 min each, no breaks
// P1-P2 متواصلتان، فاصل 5 دقائق قبل P3 (تبدأ 09:15)، ثم متواصلات
// ══════════════════════════════════════════════════════════════
const DEFAULT_PERIOD_CONFIG = [
    { id: 1, label: "1", start: "07:30", end: "08:20", breakAfter: null },
    { id: 2, label: "2", start: "08:20", end: "09:10", breakAfter: null },
    { id: 3, label: "3", start: "09:15", end: "10:05", breakAfter: null },
    { id: 4, label: "4", start: "10:05", end: "10:55", breakAfter: null },
    { id: 5, label: "5", start: "11:00", end: "11:50", breakAfter: null },
    { id: 6, label: "6", start: "11:50", end: "12:40", breakAfter: null },
    { id: 7, label: "7", start: "12:40", end: "13:30", breakAfter: null },
    { id: 8, label: "8", start: "13:30", end: "14:20", breakAfter: null },
];
// ══════════════════════════════════════════════════════════════
// SPECIALIZATIONS
// ══════════════════════════════════════════════════════════════
const SPECIALIZATIONS = [
    { id: "net", name: "تقنية شبكات الحاسب", dept: "الحاسب وتقنية المعلومات", color: "#0ea5e9" },
    { id: "auto", name: "تقنية المحركات والمركبات", dept: "التقنية الميكانيكية", color: "#f97316" },
    { id: "gen", name: "الدراسات العامة", dept: "مشترك", color: "#8b5cf6", shared: true },
];
// L=محاضرة(نظري), P=عملي/ورش, T=تمارين(تُحسب نظري), CTH=ساعات اتصال
const GENERAL_COURSES = [
    // ── فصل 1 ──
    { id: "g01", code: "ENGL 101", ar: "انجل 101", name: "لغة إنجليزية (1)", spec: "gen", level: 1, L: 3, P: 0, T: 1, CTH: 4 },
    { id: "g03", code: "MATH 101", ar: "رياض 101", name: "الرياضيات", spec: "gen", level: 1, L: 3, P: 0, T: 1, CTH: 4 },
    { id: "g04", code: "PHYS 101", ar: "فيزي 101", name: "الفيزياء", spec: "gen", level: 1, L: 2, P: 2, T: 0, CTH: 4 },
    // ── فصل 2 ──
    { id: "g05", code: "ENGL 102", ar: "انجل 102", name: "لغة إنجليزية (2)", spec: "gen", level: 2, L: 3, P: 0, T: 1, CTH: 4 },
    { id: "g06", code: "ENTR 101", ar: "رياد 101", name: "أساسيات ريادة الأعمال", spec: "gen", level: 2, L: 2, P: 0, T: 0, CTH: 2 },
    // ── فصل 3 ──
    { id: "g08", code: "ENGL 103", ar: "انجل 103", name: "لغة إنجليزية (3)", spec: "gen", level: 3, L: 3, P: 0, T: 1, CTH: 4 },
    // ── فصل 4 ──
    { id: "g10", code: "ENGL 204", ar: "انجل 204", name: "لغة إنجليزية (4)", spec: "gen", level: 4, L: 3, P: 0, T: 1, CTH: 4 },
    { id: "g12", code: "ETHS 201", ar: "اسلك 201", name: "السلوك الوظيفي والمستقبل المهني", spec: "gen", level: 4, L: 2, P: 0, T: 0, CTH: 2 },
];
const NET_COURSES = [
    // ── فصل 1 ──
    { id: "n00", code: "ICMT 101", ar: "حاسب 101", name: "مقدمة تطبيقات الحاسب", spec: "net", level: 1, L: 0, P: 4, T: 0, CTH: 4 },
    { id: "n01", code: "ICMT 121", ar: "حاسب 121", name: "تجميع الحاسب وتشغيله", spec: "net", level: 1, L: 1, P: 4, T: 0, CTH: 5 },
    { id: "n02", code: "INET 111", ar: "شبكا 111", name: "مبادئ شبكات الحاسب", spec: "net", level: 1, L: 3, P: 2, T: 0, CTH: 5 },
    // ── فصل 2 ──
    { id: "n03", code: "ICMT 102", ar: "حاسب 102", name: "تطبيقات الحاسب المتقدمة", spec: "net", level: 2, L: 0, P: 4, T: 0, CTH: 4 },
    { id: "n04", code: "ISUP 151", ar: "داعم 151", name: "نظم التشغيل (1)", spec: "net", level: 2, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "n05", code: "INET 121", ar: "شبكا 121", name: "التوجيه والتحويل (1)", spec: "net", level: 2, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "n0a", code: "ARAB 101", ar: "عربي 101", name: "الكتابة الفنية", spec: "net", level: 2, L: 2, P: 0, T: 0, CTH: 2 },
    // ── فصل 3 ──
    { id: "n06", code: "INET 231", ar: "شبكا 231", name: "مقدمة في أمن الشبكات", spec: "net", level: 3, L: 2, P: 2, T: 0, CTH: 4 },
    { id: "n07", code: "ISUP 252", ar: "داعم 252", name: "نظم التشغيل (2)", spec: "net", level: 3, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "n08", code: "INET 222", ar: "شبكا 222", name: "التوجيه والتحويل (2)", spec: "net", level: 3, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "n09", code: "INET 285", ar: "شبكا 285", name: "موضوعات مختارة", spec: "net", level: 3, L: 1, P: 2, T: 0, CTH: 3 },
    { id: "n0b", code: "ENTR 212", ar: "رياد 212", name: "ريادة الأعمال التخصصية", spec: "net", level: 3, L: 1, P: 2, T: 0, CTH: 3 },
    // ── فصل 4 ──
    { id: "n10", code: "ICMT 280", ar: "حاسب 280", name: "التأهيل للشهادات الاحترافية", spec: "net", level: 4, L: 1, P: 0, T: 0, CTH: 1 },
    { id: "n11", code: "INET 232", ar: "شبكا 232", name: "أمن الشبكات المتقدم", spec: "net", level: 4, L: 2, P: 2, T: 0, CTH: 4 },
    { id: "n12", code: "INET 241", ar: "شبكا 241", name: "ربط الشبكات", spec: "net", level: 4, L: 1, P: 4, T: 1, CTH: 6 },
    { id: "n13", code: "INET 295", ar: "شبكا 295", name: "مشروع", spec: "net", level: 4, L: 1, P: 2, T: 0, CTH: 3 },
    { id: "n0c", code: "ISLM 101", ar: "اسلم 101", name: "الدراسات الإسلامية", spec: "net", level: 4, L: 2, P: 0, T: 0, CTH: 2 },
    // ── فصل 5 ──
    { id: "n14", code: "INET 299", ar: "شبكا 299", name: "التدريب التعاوني", spec: "net", level: 5, L: 0, P: 0, T: 0, CTH: 0, coop: true },
];
const AUTO_COURSES = [
    // ── فصل 1 ──
    { id: "a01", code: "MMEV 101", ar: "متمر 101", name: "السلامة والصحة المهنية", spec: "auto", level: 1, L: 1, P: 0, T: 0, CTH: 1 },
    { id: "a02", code: "MMEV 111", ar: "متمر 111", name: "أساسيات ورش", spec: "auto", level: 1, L: 0, P: 2, T: 0, CTH: 2 },
    { id: "a03", code: "MELV 141", ar: "مكمر 141", name: "مبادئ الكهرباء والإلكترونيات", spec: "auto", level: 1, L: 1, P: 2, T: 0, CTH: 3 },
    { id: "a0a", code: "MATH 121", ar: "رياض 121", name: "الرياضيات", spec: "auto", level: 1, L: 3, P: 0, T: 1, CTH: 4 },
    { id: "a0b", code: "ARAB 101", ar: "عربي 101", name: "الكتابة الفنية", spec: "auto", level: 1, L: 2, P: 0, T: 0, CTH: 2 },
    { id: "a0c", code: "ISLM 101", ar: "اسلم 101", name: "الدراسات الإسلامية", spec: "auto", level: 1, L: 2, P: 0, T: 0, CTH: 2 },
    // ── فصل 2 ──
    { id: "a04", code: "MMEV 121", ar: "متمر 121", name: "محركات السيارات", spec: "auto", level: 2, L: 1, P: 4, T: 0, CTH: 5 },
    { id: "a05", code: "MMEV 115", ar: "متمر 115", name: "الرسم الهندسي والفني", spec: "auto", level: 2, L: 0, P: 2, T: 0, CTH: 2 },
    { id: "a06", code: "MMEV 262", ar: "متمر 262", name: "نظام الإشعال", spec: "auto", level: 2, L: 1, P: 2, T: 0, CTH: 3 },
    { id: "a07", code: "MMEV 251", ar: "متمر 251", name: "نظام نقل القدرة", spec: "auto", level: 2, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "a08", code: "MMEV 131", ar: "متمر 131", name: "نظام الفرامل", spec: "auto", level: 2, L: 1, P: 2, T: 0, CTH: 3 },
    // ── فصل 3 ──
    { id: "a09", code: "MMEV 116", ar: "متمر 116", name: "رسم بالحاسب", spec: "auto", level: 3, L: 0, P: 2, T: 0, CTH: 2 },
    { id: "a10", code: "MMEV 242", ar: "متمر 242", name: "الأنظمة الكهربائية والإلكترونية بالسيارات", spec: "auto", level: 3, L: 1, P: 4, T: 0, CTH: 5 },
    { id: "a11", code: "MMEV 222", ar: "متمر 222", name: "صيانة وإصلاح المحركات", spec: "auto", level: 3, L: 0, P: 4, T: 0, CTH: 4 },
    { id: "a12", code: "MMEV 261", ar: "متمر 261", name: "نظام الوقود (بنزين)", spec: "auto", level: 3, L: 1, P: 4, T: 0, CTH: 5 },
    { id: "a13", code: "MMEV 223", ar: "متمر 223", name: "محركات الطاقات البديلة", spec: "auto", level: 3, L: 0, P: 2, T: 0, CTH: 2 },
    { id: "a0d", code: "ENTR 232", ar: "رياد 232", name: "ريادة الأعمال التخصصية", spec: "auto", level: 3, L: 1, P: 2, T: 0, CTH: 3 },
    // ── فصل 4 ──
    { id: "a14", code: "MMEV 271", ar: "متمر 271", name: "تخطيط وإدارة ورش السيارات", spec: "auto", level: 4, L: 2, P: 0, T: 0, CTH: 2 },
    { id: "a15", code: "MMEV 252", ar: "متمر 252", name: "نظام التعليق والتوجيه", spec: "auto", level: 4, L: 1, P: 4, T: 0, CTH: 5 },
    { id: "a16", code: "MMEV 264", ar: "متمر 264", name: "نظام الوقود (ديزل)", spec: "auto", level: 4, L: 2, P: 2, T: 0, CTH: 4 },
    { id: "a17", code: "MMEV 263", ar: "متمر 263", name: "منظومات التحكم في ملوثات السيارات", spec: "auto", level: 4, L: 0, P: 2, T: 0, CTH: 2 },
    { id: "a18", code: "MMEV 281", ar: "متمر 281", name: "تشخيص الأعطال", spec: "auto", level: 4, L: 2, P: 4, T: 0, CTH: 6 },
    { id: "a19", code: "MMEV 295", ar: "متمر 295", name: "مشروع", spec: "auto", level: 4, L: 1, P: 2, T: 0, CTH: 3 },
    // ── فصل 5 ──
    { id: "a20", code: "MMEV 299", ar: "متمر 299", name: "التدريب التعاوني", spec: "auto", level: 5, L: 0, P: 0, T: 0, CTH: 0, coop: true },
];
const ALL_COURSES = [...GENERAL_COURSES, ...NET_COURSES, ...AUTO_COURSES];
const INIT_TRAINERS = [
    { id: "t1", name: "أ. محمد العمري", specs: ["net", "gen"], maxH: 18 },
    { id: "t2", name: "أ. سارة الزهراني", specs: ["auto", "gen"], maxH: 16 },
    { id: "t3", name: "أ. خالد الغامدي", specs: ["net"], maxH: 20 },
    { id: "t4", name: "أ. نورة السهلي", specs: ["gen"], maxH: 14 },
    { id: "t5", name: "أ. فيصل الدوسري", specs: ["auto"], maxH: 18 },
];
const INIT_HALLS = [
    { id: "h1", name: "قاعة 101", cap: 30, type: "theory", specs: ["all"] },
    { id: "h2", name: "قاعة 102", cap: 30, type: "theory", specs: ["all"] },
    { id: "h3", name: "مختبر شبكات 1", cap: 20, type: "practical", specs: ["net"] },
    { id: "h4", name: "مختبر شبكات 2", cap: 20, type: "practical", specs: ["net"] },
    { id: "h5", name: "ورشة محركات 1", cap: 20, type: "practical", specs: ["auto"] },
    { id: "h6", name: "ورشة محركات 2", cap: 20, type: "practical", specs: ["auto"] },
];
const DAYS = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
const uid = () => Math.random().toString(36).slice(2, 9);
// ══════════════════════════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════════════════════════
// Check if adding a theory slot at (day,period) would create 4 consecutive theory slots
function wouldExceedConsecutiveTheory(sched, courses, day, newPeriod, newSessionHours = 1, excludeId = null) {
    // Build set of theory periods (each session occupies sessionHours consecutive periods)
    const theoryPeriods = new Set();
    sched
        .filter(s => s.day === day && s.id !== excludeId)
        .filter(s => {
        const c = courses.find(x => x.id === s.courseId);
        const st = s.sessionType || ((c === null || c === void 0 ? void 0 : c.P) === 0 ? "theory" : "practical");
        return c && st === "theory";
    })
        .forEach(s => {
        for (let i = 0; i < (s.sessionHours || 1); i++)
            theoryPeriods.add(s.period + i);
    });
    // Add new session periods
    for (let i = 0; i < newSessionHours; i++)
        theoryPeriods.add(newPeriod + i);
    const sorted = [...theoryPeriods].sort((a, b) => a - b);
    let maxRun = 1, run = 1;
    for (let i = 1; i < sorted.length; i++) {
        if (sorted[i] === sorted[i - 1] + 1) {
            run++;
            maxRun = Math.max(maxRun, run);
        }
        else
            run = 1;
    }
    return maxRun > 3;
}
// Check if a course placed in this cell is purely theory (no practical hours)
function isPurelyTheory(course) {
    return course && course.P === 0;
}
// ══════════════════════════════════════════════════════════════
// MINI COMPONENTS
// ══════════════════════════════════════════════════════════════
const Badge = ({ color, children, sm }) => (React.createElement("span", { style: { background: color + "22", color, border: `1px solid ${color}44`,
        borderRadius: 8, padding: sm ? "1px 6px" : "2px 8px", fontSize: sm ? 9 : 11, fontWeight: 700, whiteSpace: "nowrap" } }, children));
const Btn = ({ onClick, bg = "#3b82f6", outline, children, sm, full }) => (React.createElement("button", { onClick: onClick, style: {
        background: outline ? "transparent" : bg, color: outline ? bg : "#fff",
        border: `1px solid ${bg}`, borderRadius: 14, padding: sm ? "5px 12px" : "8px 18px",
        cursor: "pointer", fontSize: sm ? 11 : 13, fontWeight: 700, width: full ? "100%" : "auto"
    } }, children));
const Modal = ({ title, onClose, wide, children }) => (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#000000bb", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center" } },
    React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 20, padding: 26,
            width: wide ? 860 : 480, maxHeight: "88vh", overflow: "auto", direction: "rtl" } },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
            React.createElement("h3", { style: { color: "#1A1A2E", margin: 0, fontSize: 16 } }, title),
            React.createElement("button", { onClick: onClose, style: { background: "none", border: "none", color: "#00695C", cursor: "pointer", fontSize: 22 } }, "\u00D7")),
        children)));
const Fld = ({ label, value, onChange, type = "text", min, max, note }) => (React.createElement("div", { style: { marginBottom: 13 } },
    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 5 } }, label),
    React.createElement("input", { type: type, value: value, onChange: e => onChange(e.target.value), min: min, max: max, style: { width: "100%", background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 12,
            padding: "8px 12px", color: "#004D40", fontSize: 13, boxSizing: "border-box", direction: "rtl" } }),
    note && React.createElement("div", { style: { color: "#00695C", fontSize: 10, marginTop: 3 } }, note)));
const Sel = ({ label, value, onChange, opts, note }) => (React.createElement("div", { style: { marginBottom: 13 } },
    label && React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 5 } }, label),
    React.createElement("select", { value: value, onChange: e => onChange(e.target.value), style: { width: "100%", background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 12,
            padding: "8px 12px", color: "#004D40", fontSize: 13, direction: "rtl" } }, opts.map(o => React.createElement("option", { key: o.v, value: o.v }, o.l))),
    note && React.createElement("div", { style: { color: "#00695C", fontSize: 10, marginTop: 3 } }, note)));
// ══════════════════════════════════════════════════════════════
// SCHEDULE CELL COMPONENT
// ══════════════════════════════════════════════════════════════
function SchedCell({ cell, courses, trainers, halls, spColor, mainSpec, onRemove, onUpdate, sched, periods, conflicts, sharedWith, allGroups, onAddShared }) {
    const c = courses.find(x => x.id === cell.courseId);
    if (!c)
        return null;
    const color = c.spec === "gen" ? spColor("gen") : spColor(mainSpec);
    const isTheory = c.P === 0;
    const hasBoth = c.L > 0 && c.P > 0;
    const sessionH = cell.sessionHours || 1;
    const sessionType = cell.sessionType || (isTheory ? "theory" : "practical");
    // Filter trainers by spec eligibility AND no time conflict at this cell's day/period
    const eligibleTr = trainers.filter(t => t.specs.includes(c.spec) || t.specs.includes(mainSpec) || t.specs.includes("gen"));
    // Further filter: remove those who have another session at same day+period (excluding this cell and its shared family)
    const getAllCellsLocal = () => {
        if (!sched)
            return [];
        return sched; // sched here is the current group's cells
    };
    const avTr = eligibleTr.filter(t => {
        // Check off-days
        if ((t.offDays || []).includes(cell.day))
            return false;
        const slot = (t.offSlots || []).find(s => s.day === cell.day);
        if (slot && slot.periods.includes(cell.period))
            return false;
        return true;
        // Note: cross-group conflict check done at save time (in handleCellUpdate)
    });
    // Separate lists: available vs busy
    const busyTr = eligibleTr.filter(t => !avTr.find(x => x.id === t.id));
    const hasConflict = conflicts && conflicts.length > 0;
    const isShared = sharedWith && sharedWith.length > 0;
    // Max consecutive hours allowed for this session type
    const maxH = sessionType === "practical" ? 4 : 3;
    return (React.createElement("div", { draggable: true, onDragStart: e => e.dataTransfer.setData("moveCell", JSON.stringify({ id: cell.id, day: cell.day, period: cell.period })), style: { background: hasConflict ? "#FEF2F2" : color + "11",
            border: `2px solid ${hasConflict ? "#EF4444" : color + "66"}`,
            borderRadius: 12, padding: "5px 7px", cursor: "grab", position: "relative", userSelect: "none" } },
        hasConflict && (React.createElement("div", { title: conflicts.join("\n"), style: { position: "absolute", top: -6, right: -6, background: "#EF4444", color: "#fff",
                borderRadius: "50%", width: 16, height: 16, fontSize: 10, display: "flex", alignItems: "center",
                justifyContent: "center", fontWeight: 900, zIndex: 10, cursor: "help" } }, "!")),
        React.createElement("button", { onClick: onRemove, title: "\u062D\u0630\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0631\u0631", style: { position: "absolute", top: 2, left: 2, background: "#EF4444", border: "none",
                color: "#fff", cursor: "pointer", fontSize: 9, lineHeight: 1, padding: "2px 5px",
                borderRadius: 4, fontWeight: 700, zIndex: 5, opacity: 0.85 } }, "\uD83D\uDDD1 \u062D\u0630\u0641"),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 12, marginBottom: 2 } },
            React.createElement("div", { style: { color: hasConflict ? "#991B1B" : color, fontWeight: 700, fontSize: 9, fontFamily: "monospace" } }, c.code),
            React.createElement("div", { style: { background: color, color: "#fff", borderRadius: 4, padding: "0 5px", fontSize: 9, fontWeight: 700, lineHeight: "16px" } },
                sessionH,
                "\u0633")),
        React.createElement("div", { style: { color: "#004D40", fontSize: 9, marginBottom: isShared ? 2 : 4, lineHeight: 1.3 } }, c.name),
        isShared && (React.createElement("div", { style: { marginBottom: 4 } },
            React.createElement("div", { style: { background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 8,
                    padding: "3px 6px", fontSize: 8, color: "#92400E", lineHeight: 1.5 } },
                "\uD83D\uDD17 \u0645\u0634\u062A\u0631\u0643 \u0645\u0639:",
                sharedWith.map((sw, i) => (React.createElement("span", { key: i, style: { display: "inline-block", background: "#F59E0B", color: "#fff",
                        borderRadius: 3, padding: "0 5px", marginRight: 3, fontSize: 8, fontWeight: 700 } }, sw)))))),
        React.createElement("div", { style: { marginBottom: 4 } },
            React.createElement("input", { value: cell.refNumber || "", onChange: e => onUpdate({ refNumber: e.target.value }), placeholder: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u062C\u0639\u064A...", onClick: e => e.stopPropagation(), onMouseDown: e => e.stopPropagation(), style: { width: "100%", background: "#F5F5F5", border: "1px solid #CBD5E1", borderRadius: 8,
                    padding: "3px 6px", fontSize: 9, color: "#004D40", boxSizing: "border-box", direction: "rtl",
                    fontFamily: "monospace", fontWeight: 600 } })),
        hasBoth && (React.createElement("div", { style: { display: "flex", gap: 3, marginBottom: 4 } }, ["theory", "practical"].map(t => (React.createElement("button", { key: t, onClick: () => onUpdate({ sessionType: t }), style: { flex: 1,
                background: sessionType === t ? (t === "theory" ? "#E8EAF6" : "#ECFDF5") : "#F5F5F5",
                border: `1px solid ${t === "theory" ? "#3949AB" : "#10B981"}`,
                color: t === "theory" ? "#283593" : "#065F46",
                borderRadius: 4, padding: "2px 0", fontSize: 9, cursor: "pointer",
                fontWeight: sessionType === t ? 700 : 400 } }, t === "theory" ? "📘 نظري" : "🔧 عملي"))))),
        React.createElement("div", { style: { marginBottom: 4 } },
            React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginBottom: 2 } },
                "\u0639\u062F\u062F \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u062C\u0644\u0633\u0629:",
                React.createElement("span", { style: { color: sessionType === "practical" ? "#10B981" : "#3949AB", marginRight: 4, fontWeight: 700 } },
                    "(max ",
                    maxH,
                    ")")),
            React.createElement("div", { style: { display: "flex", gap: 3 } }, [1, 2, 3, 4].map(h => (React.createElement("button", { key: h, onClick: () => onUpdate({ sessionHours: h }), disabled: h > maxH, style: { flex: 1,
                    background: sessionH === h ? color : "#F5F5F5",
                    color: sessionH === h ? "#fff" : h > maxH ? "#00897B" : "#00695C",
                    border: `1px solid ${sessionH === h ? color : h > maxH ? "#C5CAE9" : "#00897B"}`,
                    borderRadius: 4, padding: "2px 0", fontSize: 10, cursor: h > maxH ? "not-allowed" : "pointer",
                    fontWeight: sessionH === h ? 700 : 400, opacity: h > maxH ? 0.4 : 1 } }, h))))),
        (isTheory || (hasBoth && sessionType === "theory")) && (React.createElement("div", { style: { marginBottom: 3 } },
            React.createElement("div", { style: { color: "#283593", fontSize: 9, marginBottom: 1 } }, "\uD83D\uDC68\u200D\uD83C\uDFEB \u0645\u062F\u0631\u0628 \u0627\u0644\u0646\u0638\u0631\u064A:"),
            React.createElement("select", { value: cell.theoryTrainerId || "", onChange: e => onUpdate({ theoryTrainerId: e.target.value || null }), style: { width: "100%", background: "#E8EAF6", border: "1px solid #A5F3FC", borderRadius: 4,
                    color: "#1E40AF", fontSize: 9, padding: "2px 4px" } },
                React.createElement("option", { value: "" }, "-- \u0627\u062E\u062A\u0631 \u0645\u062F\u0631\u0628\u0627\u064B --"),
                avTr.map(t => React.createElement("option", { key: t.id, value: t.id },
                    "\u2705 ",
                    t.name)),
                busyTr.length > 0 && React.createElement("option", { disabled: true }, "\u2500\u2500\u2500 \u0641\u064A \u0625\u062C\u0627\u0632\u0629 \u2500\u2500\u2500"),
                busyTr.map(t => React.createElement("option", { key: t.id, value: t.id },
                    "\uD83C\uDFD6\uFE0F ",
                    t.name))))),
        (!isTheory && (sessionType === "practical" || !hasBoth)) && (React.createElement("div", { style: { marginBottom: 3 } },
            React.createElement("div", { style: { color: "#065F46", fontSize: 9, marginBottom: 1 } }, "\uD83D\uDD27 \u0645\u062F\u0631\u0628 \u0627\u0644\u0639\u0645\u0644\u064A:"),
            React.createElement("select", { value: cell.practicalTrainerId || "", onChange: e => onUpdate({ practicalTrainerId: e.target.value || null }), style: { width: "100%", background: "#ECFDF5", border: "1px solid #6EE7B7", borderRadius: 4,
                    color: "#065F46", fontSize: 9, padding: "2px 4px" } },
                React.createElement("option", { value: "" }, "-- \u0627\u062E\u062A\u0631 \u0645\u062F\u0631\u0628\u0627\u064B --"),
                avTr.map(t => React.createElement("option", { key: t.id, value: t.id },
                    "\u2705 ",
                    t.name)),
                busyTr.length > 0 && React.createElement("option", { disabled: true }, "\u2500\u2500\u2500 \u0641\u064A \u0625\u062C\u0627\u0632\u0629 \u2500\u2500\u2500"),
                busyTr.map(t => React.createElement("option", { key: t.id, value: t.id },
                    "\uD83C\uDFD6\uFE0F ",
                    t.name))))),
        React.createElement("div", null,
            React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginBottom: 1 } }, "\uD83C\uDFDB \u0627\u0644\u0642\u0627\u0639\u0629:"),
            React.createElement("select", { value: cell.hallId || "", onChange: e => onUpdate({ hallId: e.target.value || null }), style: { width: "100%", background: "#F5F5F5", border: "1px solid #CBD5E1", borderRadius: 4,
                    color: "#00695C", fontSize: 9, padding: "2px 4px" } },
                React.createElement("option", { value: "" }, "-- \u0627\u062E\u062A\u0631 \u0642\u0627\u0639\u0629 --"),
                halls.filter(h => h.specs.includes("all") || h.specs.includes(mainSpec)).map(h => (React.createElement("option", { key: h.id, value: h.id },
                    h.name,
                    " (",
                    h.cap,
                    ")"))))),
        !cell.isSharedCopy && onAddShared && (React.createElement("div", { style: { marginTop: 5, borderTop: "1px solid #E2E8F0", paddingTop: 5 } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 4 } },
                React.createElement("span", { style: { color: "#00695C", fontSize: 9, fontWeight: 700 } }, "\uD83D\uDD17 \u0645\u0634\u062A\u0631\u0643 \u0645\u0639 \u0631\u0632\u0645\u0629\u061F"),
                React.createElement("div", { style: { display: "flex", gap: 4 } },
                    React.createElement("button", { onClick: () => onUpdate({ showSharing: true }), style: { padding: "2px 8px", borderRadius: 4, fontSize: 8, fontWeight: 700, cursor: "pointer",
                            background: cell.showSharing ? "#1A237E" : "#F5F5F5",
                            color: cell.showSharing ? "#fff" : "#00695C", border: "1px solid #CBD5E1" } }, "\u0646\u0639\u0645"),
                    React.createElement("button", { onClick: () => onUpdate({ showSharing: false, sharedGroupKeys: [] }), style: { padding: "2px 8px", borderRadius: 4, fontSize: 8, fontWeight: 700, cursor: "pointer",
                            background: cell.showSharing === false ? "#F5F5F5" : "transparent",
                            color: "#00695C", border: "1px solid #CBD5E1" } }, "\u0644\u0627"))),
            cell.showSharing && allGroups && allGroups.length > 0 && (React.createElement("div", { style: { background: "#FFFBEB", border: "1px solid #F59E0B", borderRadius: 6, padding: 6 } },
                React.createElement("div", { style: { color: "#92400E", fontSize: 8, fontWeight: 700, marginBottom: 4 } }, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0631\u0632\u0645 \u0627\u0644\u0645\u0634\u062A\u0631\u0643\u0629:"),
                React.createElement("div", { style: { maxHeight: 120, overflowY: "auto" } }, allGroups.map(g => {
                    const selected = (cell.sharedGroupKeys || []).includes(g.key);
                    return (React.createElement("label", { key: g.key, style: { display: "flex", alignItems: "center", gap: 6,
                            marginBottom: 4, cursor: g.exists ? "not-allowed" : "pointer", opacity: g.exists ? 0.5 : 1 } },
                        React.createElement("input", { type: "checkbox", checked: selected, disabled: !!g.exists, onChange: () => {
                                const keys = cell.sharedGroupKeys || [];
                                const newKeys = selected ? keys.filter(k => k !== g.key) : [...keys, g.key];
                                onUpdate({ sharedGroupKeys: newKeys });
                            } }),
                        React.createElement("span", { style: { fontSize: 8, color: "#00695C" } }, g.label),
                        g.exists && React.createElement("span", { style: { fontSize: 7, color: "#F59E0B", fontWeight: 700 } }, "\u0645\u0648\u062C\u0648\u062F")));
                })),
                (cell.sharedGroupKeys || []).length > 0 && (React.createElement("button", { onClick: () => onAddShared(cell.sharedGroupKeys || []), style: { width: "100%", marginTop: 5, padding: "4px", background: "linear-gradient(135deg,#00897B,#00695C)", color: "#fff",
                        border: "none", borderRadius: 8, fontSize: 9, fontWeight: 700, cursor: "pointer" } },
                    "\u2705 \u0646\u0633\u062E \u0644\u0644\u0631\u0632\u0645 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629 (",
                    (cell.sharedGroupKeys || []).length,
                    ")")))),
            isShared && (React.createElement("div", { style: { marginTop: 4, background: "#E8EAF6", border: "1px solid #BFDBFE",
                    borderRadius: 8, padding: "3px 6px" } },
                React.createElement("div", { style: { color: "#283593", fontSize: 8, fontWeight: 700 } }, "\uD83D\uDD17 \u0645\u0646\u0633\u0648\u062E \u0644\u0640:"),
                sharedWith.map((sw, i) => (React.createElement("div", { key: i, style: { color: "#3949AB", fontSize: 8 } }, sw)))))))));
}
// ══════════════════════════════════════════════════════════════
// PERIOD SETTINGS MODAL
// ══════════════════════════════════════════════════════════════
function PeriodSettingsModal({ periods, setPeriods, onClose }) {
    const [local, setLocal] = (0, React.useState)(periods.map(p => (Object.assign(Object.assign({}, p), { breakAfter: p.breakAfter ? Object.assign({}, p.breakAfter) : null }))));
    const update = (idx, field, val) => setLocal(p => p.map((x, i) => i === idx ? Object.assign(Object.assign({}, x), { [field]: val }) : x));
    const updateBreak = (idx, field, val) => setLocal(p => p.map((x, i) => i === idx ? Object.assign(Object.assign({}, x), { breakAfter: x.breakAfter ? Object.assign(Object.assign({}, x.breakAfter), { [field]: val }) : null }) : x));
    const toggleBreak = (idx) => setLocal(p => p.map((x, i) => i === idx ? Object.assign(Object.assign({}, x), { breakAfter: x.breakAfter ? null : { label: "استراحة", dur: 10, from: x.end, to: x.end } }) : x));
    return (React.createElement(Modal, { title: "\u2699\uFE0F \u0625\u0639\u062F\u0627\u062F\u0627\u062A \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062D\u0635\u0635", onClose: onClose, wide: true },
        React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 16, padding: 12, marginBottom: 14 } },
            React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 8 } },
                "\uD83D\uDD50 \u0643\u0644 \u062D\u0635\u0629 = ",
                React.createElement("strong", { style: { color: "#f59e0b" } }, "50 \u062F\u0642\u064A\u0642\u0629"),
                " \u00A0|\u00A0 \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u064A\u0648\u0645: ",
                React.createElement("strong", { style: { color: "#0ea5e9" } }, "07:30"),
                " \u00A0|\u00A0 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u064A\u0648\u0645: ",
                React.createElement("strong", { style: { color: "#0ea5e9" } }, "14:20"),
                " \u00A0|\u00A0 \u0627\u0644\u062D\u0635\u0629 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u062A\u0628\u062F\u0623: ",
                React.createElement("strong", { style: { color: "#0ea5e9" } }, "09:15")),
            React.createElement("div", { style: { color: "#00695C", fontSize: 10 } }, "\u26A0\uFE0F \u0627\u0644\u0646\u0638\u0631\u064A: \u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u062C\u0627\u0648\u0632 3 \u062D\u0635\u0635 \u0645\u062A\u062A\u0627\u0644\u064A\u0629 \u00A0|\u00A0 \u0627\u0644\u0639\u0645\u0644\u064A: \u064A\u064F\u0633\u0645\u062D \u0628\u0640 4 \u062D\u0635\u0635 \u0645\u062A\u062A\u0627\u0644\u064A\u0629")),
        React.createElement("div", { style: { overflowX: "auto" } },
            React.createElement("table", { style: { borderCollapse: "collapse", width: "100%", fontSize: 12 } },
                React.createElement("thead", null,
                    React.createElement("tr", { style: { background: "#F5F5F5" } }, ["الحصة", "من", "إلى", "استراحة بعدها", "من", "إلى", "المدة"].map(h => (React.createElement("th", { key: h, style: { color: "#00695C", padding: "8px 10px", border: "1px solid #1e2d45", textAlign: "center" } }, h))))),
                React.createElement("tbody", null, local.map((p, i) => (React.createElement(React.Fragment, null,
                    React.createElement("tr", { key: p.id, style: { background: i % 2 === 0 ? "#1A237E" : "#FFFFFF" } },
                        React.createElement("td", { style: { padding: "8px 10px", border: "1px solid #1e2d45", textAlign: "center", color: "#0ea5e9", fontWeight: 700 } },
                            "\u0627\u0644\u062D\u0635\u0629 ",
                            p.label),
                        React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45" } },
                            React.createElement("input", { type: "time", value: p.start, onChange: e => update(i, "start", e.target.value), style: { background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 6, padding: "4px 8px", color: "#004D40", fontSize: 12, direction: "ltr" } })),
                        React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45" } },
                            React.createElement("input", { type: "time", value: p.end, onChange: e => update(i, "end", e.target.value), style: { background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 6, padding: "4px 8px", color: "#004D40", fontSize: 12, direction: "ltr" } })),
                        React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45", textAlign: "center" } },
                            React.createElement("button", { onClick: () => toggleBreak(i), style: { background: p.breakAfter ? "#065F46" : "#FFFFFF", border: `1px solid ${p.breakAfter ? "#10b981" : "#C5CAE9"}`,
                                    color: p.breakAfter ? "#6ee7b7" : "#00695C", borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 11 } }, p.breakAfter ? "✓ يوجد" : "+ أضف")),
                        p.breakAfter ? (React.createElement(React.Fragment, null,
                            React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45" } },
                                React.createElement("input", { type: "time", value: p.breakAfter.from, onChange: e => updateBreak(i, "from", e.target.value), style: { background: "#FFFFFF", border: "1px solid #064e3b", borderRadius: 6, padding: "4px 8px", color: "#6ee7b7", fontSize: 12, direction: "ltr" } })),
                            React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45" } },
                                React.createElement("input", { type: "time", value: p.breakAfter.to, onChange: e => updateBreak(i, "to", e.target.value), style: { background: "#FFFFFF", border: "1px solid #064e3b", borderRadius: 6, padding: "4px 8px", color: "#6ee7b7", fontSize: 12, direction: "ltr" } })),
                            React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1e2d45", textAlign: "center" } },
                                React.createElement("input", { type: "number", value: p.breakAfter.dur, min: 5, max: 120, onChange: e => updateBreak(i, "dur", +e.target.value), style: { width: 55, background: "#FFFFFF", border: "1px solid #064e3b", borderRadius: 6, padding: "4px 6px", color: "#6ee7b7", fontSize: 12, textAlign: "center" } }),
                                React.createElement("span", { style: { color: "#00695C", fontSize: 10, marginRight: 3 } }, "\u062F")))) : (React.createElement(React.Fragment, null,
                            React.createElement("td", { style: { border: "1px solid #1e2d45", background: "#F5F5F5" }, colSpan: 3 })))),
                    p.breakAfter && (React.createElement("tr", { key: `br-${p.id}`, style: { background: "#F0FDF4" } },
                        React.createElement("td", { colSpan: 7, style: { padding: "4px 16px", border: "1px solid #1e2d45" } },
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                React.createElement("span", { style: { color: "#10b981", fontSize: 10 } }, "\uD83D\uDD4C \u0627\u0633\u0645 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0629:"),
                                React.createElement("input", { value: p.breakAfter.label, onChange: e => updateBreak(i, "label", e.target.value), style: { background: "#FFFFFF", border: "1px solid #064e3b", borderRadius: 6, padding: "3px 10px",
                                        color: "#6ee7b7", fontSize: 11, width: 200 } }),
                                React.createElement("span", { style: { color: "#065F46", fontSize: 10 } },
                                    p.breakAfter.from,
                                    " \u2014 ",
                                    p.breakAfter.to,
                                    " (",
                                    p.breakAfter.dur,
                                    " \u062F\u0642\u064A\u0642\u0629)"))))))))))),
        React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 16 } },
            React.createElement(Btn, { onClick: () => { setPeriods(local); onClose(); }, bg: "#10b981", full: true }, "\uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"),
            React.createElement(Btn, { onClick: () => { setLocal(DEFAULT_PERIOD_CONFIG.map(p => (Object.assign(Object.assign({}, p), { breakAfter: p.breakAfter ? Object.assign({}, p.breakAfter) : null })))); }, bg: "#C5CAE9", outline: true }, "\u21BA \u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0636\u0628\u0637"))));
}
// ══════════════════════════════════════════════════════════════
// COURSE ASSIGNMENT MODAL (assign trainer per course)
// ══════════════════════════════════════════════════════════════
function CourseAssignModal({ courses, trainers, assignments, setAssignments, onClose }) {
    const [filterSpec, setFilterSpec] = (0, React.useState)("all");
    const vis = courses.filter(c => !c.coop && (filterSpec === "all" || c.spec === filterSpec));
    const spColor = id => { var _a; return ((_a = SPECIALIZATIONS.find(s => s.id === id)) === null || _a === void 0 ? void 0 : _a.color) || "#00695C"; };
    const spName = id => { var _a; return ((_a = SPECIALIZATIONS.find(s => s.id === id)) === null || _a === void 0 ? void 0 : _a.name) || id; };
    const getAssign = (cid) => assignments[cid] || { theoryId: null, practicalId: null };
    const setAssign = (cid, field, val) => setAssignments(p => (Object.assign(Object.assign({}, p), { [cid]: Object.assign(Object.assign({}, getAssign(cid)), { [field]: val }) })));
    return (React.createElement(Modal, { title: "\uD83D\uDCCB \u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0644\u0644\u0645\u0642\u0631\u0631\u0627\u062A", onClose: onClose, wide: true },
        React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: 10, marginBottom: 14, fontSize: 11, color: "#00695C", lineHeight: 1.8 } }, "\u0647\u0646\u0627 \u064A\u0645\u0643\u0646\u0643 \u062A\u062E\u0635\u064A\u0635 \u0645\u062F\u0631\u0628 \u062B\u0627\u0628\u062A \u0644\u0643\u0644 \u0645\u0642\u0631\u0631 (\u0646\u0638\u0631\u064A \u0648/\u0623\u0648 \u0639\u0645\u0644\u064A). \u0639\u0646\u062F \u0648\u0636\u0639 \u0627\u0644\u0645\u0642\u0631\u0631 \u0641\u064A \u0627\u0644\u062C\u062F\u0648\u0644\u060C \u0633\u064A\u064F\u0639\u0628\u0623 \u0627\u0644\u0645\u062F\u0631\u0628 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B. \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u062F\u0631\u0628 \u0627\u0644\u0646\u0638\u0631\u064A \u0645\u062E\u062A\u0644\u0641\u0627\u064B \u0639\u0646 \u0645\u062F\u0631\u0628 \u0627\u0644\u0639\u0645\u0644\u064A."),
        React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" } }, [{ id: "all", name: "الكل", color: "#00695C" }, ...SPECIALIZATIONS].map(s => (React.createElement("button", { key: s.id, onClick: () => setFilterSpec(s.id), style: { padding: "5px 12px", borderRadius: 10, border: `1px solid ${s.color}55`,
                background: filterSpec === s.id ? s.color : "transparent", color: filterSpec === s.id ? "#fff" : s.color,
                cursor: "pointer", fontSize: 11, fontWeight: 600 } }, s.name)))),
        React.createElement("div", { style: { overflowX: "auto" } },
            React.createElement("table", { style: { borderCollapse: "collapse", width: "100%", fontSize: 12 } },
                React.createElement("thead", null,
                    React.createElement("tr", { style: { background: "#F5F5F5" } }, ["التخصص", "الفصل", "الرمز", "اسم المقرر", "نوع الساعات", "مدرب النظري", "مدرب العملي"].map(h => (React.createElement("th", { key: h, style: { color: "#00695C", padding: "8px 10px", border: "1px solid #1e2d45", textAlign: "center", whiteSpace: "nowrap" } }, h))))),
                React.createElement("tbody", null, vis.map(c => {
                    const color = spColor(c.spec);
                    const a = getAssign(c.id);
                    const avTr = trainers.filter(t => t.specs.includes(c.spec) || t.specs.includes("gen"));
                    const isTheory = c.P === 0;
                    const hasBoth = c.L > 0 && c.P > 0;
                    const isPract = c.L === 0 && c.T === 0;
                    return (React.createElement("tr", { key: c.id, style: { borderBottom: "1px solid #1a2535" } },
                        React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #1a2535" } },
                            React.createElement(Badge, { color: color }, spName(c.spec))),
                        React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", color: "#00695C", border: "1px solid #1a2535" } }, c.level),
                        React.createElement("td", { style: { padding: "7px 10px", color, fontWeight: 700, fontFamily: "monospace", fontSize: 11, border: "1px solid #1a2535" } }, c.code),
                        React.createElement("td", { style: { padding: "7px 10px", color: "#004D40", border: "1px solid #1a2535" } }, c.name),
                        React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                            React.createElement("div", { style: { display: "flex", gap: 3, justifyContent: "center" } },
                                c.L > 0 && React.createElement(Badge, { color: "#3b82f6" },
                                    "\u0645\u062D:",
                                    c.L),
                                c.T > 0 && React.createElement(Badge, { color: "#8b5cf6" },
                                    "\u0645\u062A:",
                                    c.T),
                                c.P > 0 && React.createElement(Badge, { color: "#10b981" },
                                    "\u0639\u0645:",
                                    c.P))),
                        React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1a2535" } }, (!isPract) ? (React.createElement("select", { value: a.theoryId || "", onChange: e => setAssign(c.id, "theoryId", e.target.value || null), style: { width: "100%", background: "#FFFFFF", border: "1px solid #1e40af", borderRadius: 6,
                                color: "#283593", fontSize: 11, padding: "4px 6px" } },
                            React.createElement("option", { value: "" }, "-- \u063A\u064A\u0631 \u0645\u062D\u062F\u062F --"),
                            avTr.map(t => React.createElement("option", { key: t.id, value: t.id }, t.name)))) : React.createElement("span", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u0638\u0631\u064A")),
                        React.createElement("td", { style: { padding: "6px 8px", border: "1px solid #1a2535" } }, c.P > 0 ? (React.createElement("select", { value: a.practicalId || "", onChange: e => setAssign(c.id, "practicalId", e.target.value || null), style: { width: "100%", background: "#FFFFFF", border: "1px solid #064e3b", borderRadius: 6,
                                color: "#6ee7b7", fontSize: 11, padding: "4px 6px" } },
                            React.createElement("option", { value: "" }, "-- \u063A\u064A\u0631 \u0645\u062D\u062F\u062F --"),
                            avTr.map(t => React.createElement("option", { key: t.id, value: t.id }, t.name)))) : React.createElement("span", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0639\u0645\u0644\u064A"))));
                })))),
        React.createElement("div", { style: { marginTop: 14, display: "flex", justifyContent: "flex-end" } },
            React.createElement(Btn, { onClick: onClose, bg: "#10b981" }, "\u2713 \u062D\u0641\u0638 \u0627\u0644\u062A\u062E\u0635\u064A\u0635\u0627\u062A"))));
}
// ══════════════════════════════════════════════════════════════
// MAIN APP
// ══════════════════════════════════════════════════════════════
// Halls Excel template base64
const HALLS_TEMPLATE_B64 = "UEsDBBQAAAAIAIdc0VxGx01IlQAAAM0AAAAQAAAAZG9jUHJvcHMvYXBwLnhtbE3PTQvCMAwG4L9SdreZih6kDkQ9ip68zy51hbYpbYT67+0EP255ecgboi6JIia2mEXxLuRtMzLHDUDWI/o+y8qhiqHke64x3YGMsRoPpB8eA8OibdeAhTEMOMzit7Dp1C5GZ3XPlkJ3sjpRJsPiWDQ6sScfq9wcChDneiU+ixNLOZcrBf+LU8sVU57mym/8ZAW/B7oXUEsDBBQAAAAIAIdc0VwAkrQw7gAAACsCAAARAAAAZG9jUHJvcHMvY29yZS54bWzNks9KxDAQh19Fcm+nabFC6Oay4klBcEHxFpLZ3WDzh2Sk3be3rbtdRB/AY2Z++eYbmE5HoUPC5xQiJrKYb0bX+yx03LAjURQAWR/RqVxOCT819yE5RdMzHSAq/aEOCHVVteCQlFGkYAYWcSUy2RktdEJFIZ3xRq/4+Jn6BWY0YI8OPWXgJQcm54nxNPYdXAEzjDC5/F1AsxKX6p/YpQPsnByzXVPDMJRDs+SmHTi8PT2+LOsW1mdSXuP0K1tBp4gbdpn82mzvdw9M1lXdFlVb8Lsd56JpBb99n11/+F2FXTB2b/+x8UVQdvDrLuQXUEsDBBQAAAAIAIdc0VyZXJwjEAYAAJwnAAATAAAAeGwvdGhlbWUvdGhlbWUxLnhtbO1aW3PaOBR+76/QeGf2bQvGNoG2tBNzaXbbtJmE7U4fhRFYjWx5ZJGEf79HNhDLlg3tkk26mzwELOn7zkVH5+g4efPuLmLohoiU8nhg2S/b1ru3L97gVzIkEUEwGaev8MAKpUxetVppAMM4fckTEsPcgosIS3gUy9Zc4FsaLyPW6rTb3VaEaWyhGEdkYH1eLGhA0FRRWm9fILTlHzP4FctUjWWjARNXQSa5iLTy+WzF/NrePmXP6TodMoFuMBtYIH/Ob6fkTlqI4VTCxMBqZz9Wa8fR0kiAgsl9lAW6Sfaj0xUIMg07Op1YznZ89sTtn4zK2nQ0bRrg4/F4OLbL0otwHATgUbuewp30bL+kQQm0o2nQZNj22q6RpqqNU0/T933f65tonAqNW0/Ta3fd046Jxq3QeA2+8U+Hw66JxqvQdOtpJif9rmuk6RZoQkbj63oSFbXlQNMgAFhwdtbM0gOWXin6dZQa2R273UFc8FjuOYkR/sbFBNZp0hmWNEZynZAFDgA3xNFMUHyvQbaK4MKS0lyQ1s8ptVAaCJrIgfVHgiHF3K/99Ze7yaQzep19Os5rlH9pqwGn7bubz5P8c+jkn6eT101CznC8LAnx+yNbYYcnbjsTcjocZ0J8z/b2kaUlMs/v+QrrTjxnH1aWsF3Pz+SejHIju932WH32T0duI9epwLMi15RGJEWfyC265BE4tUkNMhM/CJ2GmGpQHAKkCTGWoYb4tMasEeATfbe+CMjfjYj3q2+aPVehWEnahPgQRhrinHPmc9Fs+welRtH2Vbzco5dYFQGXGN80qjUsxdZ4lcDxrZw8HRMSzZQLBkGGlyQmEqk5fk1IE/4rpdr+nNNA8JQvJPpKkY9psyOndCbN6DMawUavG3WHaNI8ev4F+Zw1ChyRGx0CZxuzRiGEabvwHq8kjpqtwhErQj5iGTYacrUWgbZxqYRgWhLG0XhO0rQR/FmsNZM+YMjszZF1ztaRDhGSXjdCPmLOi5ARvx6GOEqa7aJxWAT9nl7DScHogstm/bh+htUzbCyO90fUF0rkDyanP+kyNAejmlkJvYRWap+qhzQ+qB4yCgXxuR4+5Xp4CjeWxrxQroJ7Af/R2jfCq/iCwDl/Ln3Ppe+59D2h0rc3I31nwdOLW95GblvE+64x2tc0LihjV3LNyMdUr5Mp2DmfwOz9aD6e8e362SSEr5pZLSMWkEuBs0EkuPyLyvAqxAnoZFslCctU02U3ihKeQhtu6VP1SpXX5a+5KLg8W+Tpr6F0PizP+Txf57TNCzNDt3JL6raUvrUmOEr0scxwTh7LDDtnPJIdtnegHTX79l125COlMFOXQ7gaQr4Dbbqd3Do4npiRuQrTUpBvw/npxXga4jnZBLl9mFdt59jR0fvnwVGwo+88lh3HiPKiIe6hhpjPw0OHeXtfmGeVxlA0FG1srCQsRrdguNfxLBTgZGAtoAeDr1EC8lJVYDFbxgMrkKJ8TIxF6HDnl1xf49GS49umZbVuryl3GW0iUjnCaZgTZ6vK3mWxwVUdz1Vb8rC+aj20FU7P/lmtyJ8MEU4WCxJIY5QXpkqi8xlTvucrScRVOL9FM7YSlxi84+bHcU5TuBJ2tg8CMrm7Oal6ZTFnpvLfLQwJLFuIWRLiTV3t1eebnK56Inb6l3fBYPL9cMlHD+U751/0XUOufvbd4/pukztITJx5xREBdEUCI5UcBhYXMuRQ7pKQBhMBzZTJRPACgmSmHICY+gu98gy5KRXOrT45f0Usg4ZOXtIlEhSKsAwFIRdy4+/vk2p3jNf6LIFthFQyZNUXykOJwT0zckPYVCXzrtomC4Xb4lTNuxq+JmBLw3punS0n/9te1D20Fz1G86OZ4B6zh3OberjCRaz/WNYe+TLfOXDbOt4DXuYTLEOkfsF9ioqAEativrqvT/klnDu0e/GBIJv81tuk9t3gDHzUq1qlZCsRP0sHfB+SBmOMW/Q0X48UYq2msa3G2jEMeYBY8wyhZjjfh0WaGjPVi6w5jQpvQdVA5T/b1A1o9g00HJEFXjGZtjaj5E4KPNz+7w2wwsSO4e2LvwFQSwMEFAAAAAgAh1zRXHhJDXcSCQAAZEwAABgAAAB4bC93b3Jrc2hlZXRzL3NoZWV0MS54bWy13Gtv20YWBuC/QmiBIsUClXiRRDm2gXTuwLYImt32s2LTtlBJVCl63Szy45dXmWOfeTk27A+JLD1z45lD8khxdP6QF38e77KsDP7ebffHi8ldWR7OptPj1V22Wx9/yg/ZvpKbvNity+ppcTs9Hopsfd102m2n0Wy2mO7Wm/3k8rx57XNxeZ7fl9vNPvtcBMf73W5dfPs52+YPF5Nw0r/w2+b2rqxfmF6eH9a32Zes/M/hc1E9m55Gud7ssv1xk++DIru5mHwKz8x8VndoWvy+yR6Og5+Doh7y3/m/sptm4KA+tK95/meN5vpiMpvUU+2z4NuXw3ZTtZlPgjI/1O1Ztt1WEywmwfqq3Pw3+1w1u5h8zcsy39VeLbtcl9VLN0X+v2zfrCHbZlXbanGHZ43bQbpB62P+qzuAyen46kUNf+6PRDaBrgL3dX3MWL79Y3Nd3l1M0klwnd2s77flb/mDzrrgzevxrvLtsfk7eGjbRtEkuLo/VqvpOlcr2G327eP67y7ogw5h4ugQdR2iJx2cM8Rdh/hph5mjQ9J1SHw7zLsOc99jWHQdFk87uGZYdh2WT5fkmiHtOqS+UVp1HVZNOrT712w+X5fry/Mir3K5aV1vcnwa5bTtVR5f1S2a1GoaVq9u9vUZ96UsKt1UA5aXP/wjXMwWH6uH+SpqHpbzj82L84/B8GnSYDprH2Krado3IXos02GPtLWwHWa5sJ4t6/5pFEbNOIuZvZ6k7zKYZJ4uB5P0A7WTnJrExLLsweer4fHUowWPx/W0YzdqNDy69kCeTFzZ+bSsNq+O9PSq+lNt2mnnonbnHnP4+c5Fzc5F7p17urTFYDvqYzoLyrssL74FF8HzfX7ciuB7cCjqy9HVets27QLSHWw/ftvUvcXduKv+4SxYb7f93Im10viUMd+DfXVfaWdNh9HsGg035Xuwvi/zfsT58DD6xgv/HYjbHVhQG2A1TNqGIdmy3aqk2aoYbVU8DFk6XGcf5iq+9nKbsX9ux05G08DOydNZNX+y28QU7B2Xz99xbPGOY8v3D7t6/yn0+09h3nUK60Scd9dMcCLOm8XMPRazdN/mHHeH6v40pRrjOwJ1So+vsr+sRa9YJXWG+8bFeS8JPrT3kunpVvEjdba/cJ7+Bj4I8YfB8/T04I47VWDYlUV9MNRixUsX67rRBR+qG920uo9N6/sTNZV8cfyt4+h3Y0VeRl56GKvQukku+mSirh+vXHfaBX5pXXaX3TZ2M9KXk9EZ7arkdD63B2UVsSMFwKK7nIDiedEsZoEW47pUhLOQOvXxiHQn1nZaOjq1JyZ1NuLJ4hl1UuA+VaJT6T0aJ8/0bvMjJNN8JHJU9o4vq38DYV3u+otIl6+pVbQ+vluhstc147PkW44n37IZK31d8kVU8uER6U5s+crkw5PRyYf7OJJvNE5vkHwjkaOSb3xZb518rhmfJV86nnzp+JUP1z1e7+jISySe+lfHNbLttXL0OlUtVKbiCSMyU3GfqhagMnU0qC/K1AWZqXgOMlM9lhWO39ZTq6x4zO3gnwHbHK9yKmNdMz/L2NV4xq7GL5dvkLHkdRVP/avjwrp6fcbiCemMxX0cGTsa1DfIWDwHmbEey3qnjHXN/Cxj68+Ox1K2bjN2lbXuCn12Lj9an4GFgza+V9mRuT85LrNdt1dl7ciUdNqOdKrfcVGJOx7al2RuSn+AMzIJmbo+e27Vcyn14XT/+QX1KYrz3U+bwc4FPE/h0COFw/HL7hukMHnZHZn7k+O623V7XQrjKR0pjDs5U3g0tG+RwngSOoU99vx9U9i1gOcpHHmkcPsPLfV5Ub2+n1gp5jYGjAMTwCQwBUwDM7TZYYo9whS3w4RUmNzGgHFgApgEpoBpYIY2O0yJR5gSkE1uY8A4MAFMAlPANDBDmx2muUeY5iCb3MaAcWACmASmgGlghjY7TB4fQIYLkE1uY8A4MAFMAlPANDBDmx0mj4/KwiXIJrcxYByYACaBKWAamKHNDpPHhzphCrLJbQwYByaASWAKmAZmaLPD5PFJQrgC2eQ2BowDE8AkMAVMAzO02b+e4vHuNZq5swkYA8aBCWASmAKmgRna7DB5vEOKQnc2AWPAODABTAJTwDQwQ5sdJo8qPAJVODAGjAMTwCQwBUwDM7TZYfKowiNQhQNjwDgwAUwCU8A0MEObHSaPKjwCVTgwBowDE8AkMAVMAzO02WHyqMIjUIUDY8A4MAFMAlPANDBDmx0mjyo8AlU4MAaMAxPAJDAFTAMztNlh8qjCI1CFA2PAODABTAJTwDQwQ5sdJo8qPAJVODAGjAMTwCQwBUwDM7TZYfKowiNQhQNjwDgwAUwCU8A0MEOb/SvKHlV4DKpwYAwYByaASWAKmAZmaLPD5FGFx6AKB8aAcWACmASmgGlghjY7TB5VeAyqcGAMGAcmgElgCpgGZmizw+RRhcegCgfGgHFgApgEpoBpYIY2O0weVXgMqnBgDBgHJoBJYAqYBmZos8PkUYXHoAoHxoBxYAKYBKaAaWCGNjtMHlV4DKpwYAwYByaASWAKmAZmaLPD5FGFx6AKB8aAcWACmASmgGlghjY7TB5VeAyqcGAMGAcmgElgCpgGZmizw+RRhcegCgfGgHFgApgEpoBpYIY2+///eVThCajCgTFgHJgAJoEpYBqYoc0Ok0cVnoAqHBgDxoEJYBKYAqaBGdrsMHlU4QmowoExYByYACaBKWAamKHNDpNHFZ6AKhwYA8aBCWASmAKmgRna7DB5VOEJqMKBMWAcmAAmgSlgGpihzQ6TRxWegCocGAPGgQlgEpgCpoEZ2uwweVThCajCgTFgHJgAJoEpYBqYoc0Ok0cVnoAqHBgDxoEJYBKYAqaBGdrsMHlU4QmowoExYByYACaBKWAamKHNDpNHFZ6AKhwYA8aBCWASmAKmgRna7P/871GFz0EVDowB48AEMAlMAdPADG1tmKaDbwfaZcVt89VSx+Aqv9/XUZsMXn38qqzmW56evh6dmebLnKaPw7Tfv/XLurjd7I/Btvn2rNlPy+qOUrR70D4p80O9HUH7PVfNj3fZ+jor6gaV3+R52T+pJzh9sdjl/wFQSwMEFAAAAAgAh1zRXK2YOHbBAwAAhxgAAA0AAAB4bC9zdHlsZXMueG1s3Vntjuo2EH2VKA/QJCRkSQVIaSBSpba60t0f968hDlhyPpqYLdynr8cJOIBnl9uNKlpWK2yPz5kz43Hs7M5bceL0655SYR0LXrYLey9E/bPjtNs9LUj7U1XTUlryqimIkN1m57R1Q0nWAqjgzsR1Q6cgrLSX8/JQpIVorW11KMXCdm1nOc+rUo94rt2NyLmkoNYb4Qs7IZxtGqYmk4LxUzc8gYFtxavGElILlWgYab93Zq/rgcyep2Bl1cCg03m49RM3jHCwb3oG7aDZbaRcN1WfKy/BI4RXJG4SxOH6isT9lKqXxI/XqyHh7FN8bjhNg3A8PkPWvB/OmucH6yAeMWveKlivZiMS3qftMULjbPXVShTjXO8Oz+5GlvOaCEGbMpUdBVKDdyarb7+eark9dg05eZOp/TCgrTjLwOUuMRewM4B+kjRJ0zgdm3S9Wkejk668NF5PRyZ11y9B5I5MqjfemDlN03B00tRNV2k8ttJEkuILpb7kFttUTUabyybz7fPQcs5pLiS8Ybs9fIuqhgdAJURVyEbGyK4qidqAZ8QQaanDc2GLvTr8rh4W8TT100Rpg6m9jwcRaq6S8yBAzjzrfhDRTf4gsIJm7FDcsgweD4bQPsTcB/chxBDeh5i7APuGLIgt5fwr0HzL9aNXUh1zq7vA/JrB3cWCR/S5KUupb3Y0XQccDdk67iHt5B/xWjV7q8QvBxlCqfp/HipBvzQ0Z0fVP+YXARi7p9knN+ykrvkp5mxXFrQL/mGHyzk546x91bDv0hscbls5QBvbeqONYNvBCKTomOMyJ1qm/8QyfS0zGMr0nktmoGVOn1jmVMsMhzIn/65M66+G1K/0KPrr3ruaQ6355YlT+6Jlzp5Y5iCb0RPLnGmZnvvEOqP/RnFGz7XqTn9aD64EVxeCy6gFr3UL+w/4IwjXjq3NgXHByr63Z1lGy7t7gaQXZMPpNb+cn9GcHLh4vRgXtm7/ri440WXWF0hGP0u3f4PLlBde3lWlL1Zm9EizpO/Km9H1i4j6AODWot8m7i0YprOZLWDD/GAKMEyHwvz8n+KZofF0NkzbzGiZoZgZiulQJkuifjA/ZkwkP+ZIo8j3wxDLaJIYFSRY3sIQfs1smDZAYH7A04/lGl9tvELerwNsTd+rECxSvBKxSPFcg8WcN0BEkXm1MT+AwFYBqx3wb/YDNWXG+D6sKqYN28G4JYowC9SiuUbDEMlOCD/m9cF2ie9HkdkCNrMC38cssBtxC6YANGAW31fn4M155JzPKUf/62H5N1BLAwQUAAAACACHXNFcl4q7HMAAAAATAgAACwAAAF9yZWxzLy5yZWxznZK5bsMwDEB/xdCeMAfQIYgzZfEWBPkBVqIP2BIFikWdv6/apXGQCxl5PTwS3B5pQO04pLaLqRj9EFJpWtW4AUi2JY9pzpFCrtQsHjWH0kBE22NDsFosPkAuGWa3vWQWp3OkV4hc152lPdsvT0FvgK86THFCaUhLMw7wzdJ/MvfzDDVF5UojlVsaeNPl/nbgSdGhIlgWmkXJ06IdpX8dx/aQ0+mvYyK0elvo+XFoVAqO3GMljHFitP41gskP7H4AUEsDBBQAAAAIAIdc0VxOonc8WQEAAEACAAAPAAAAeGwvd29ya2Jvb2sueG1sjVFNS8NAEP0rYX+ASYsWLE0vFrUgWqz0vkkmZuh+hNltqz2Kgv+k0oPg0X+S/hsnCcGCFw/L7HuzvHnzdrSxtEysXQZPWhkXi8L7chiGLi1AS3diSzDcyS1p6RnSY+hKApm5AsBrFfajaBBqiUaMR53WjMJjYD2kHq1hsiYWCBv3269hsEaHCSr0z7Fo7gpEoNGgxi1ksYhE4Aq7ubaEW2u8VPOUrFKx6LWNBZDH9A89r00+yMQ1jJfJvWQjsRhELJgjOd+8aPQle1wDP27RyttLVB5oIj1ckV2VaB5rGd4iPFqjyaGrbYhD+k+MNs8xhYlNVxqMb3MkULVB4wosnQiM1BCLand4PbxUu+qbzz44vDfEW/VZ7auP6qsm6215/DRrN/ds+ShHGiI3aJq15jvHGeRoILvlIY55Ti+dUVCXRqd/etY755RWSl0wd2durMy6ALrPG/8AUEsDBBQAAAAIAIdc0VwkHpuirQAAAPgBAAAaAAAAeGwvX3JlbHMvd29ya2Jvb2sueG1sLnJlbHO1kT0OgzAMha8S5QA1UKlDBUxdWCsuEAXzIxISxa4Kty+FAZA6dGGyni1/78lOn2gUd26gtvMkRmsGymTL7O8ApFu0ii7O4zBPahes4lmGBrzSvWoQkii6QdgzZJ7umaKcPP5DdHXdaXw4/bI48A8wvF3oqUVkKUoVGuRMwmi2NsFS4stMlqKoMhmKKpZwWiDiySBtaVZ9sE9OtOd5Fzf3Ra7N4wmu3wxweHT+AVBLAwQUAAAACACHXNFcZZB5khkBAADPAwAAEwAAAFtDb250ZW50X1R5cGVzXS54bWytk01OwzAQha8SZVslLixYoKYbYAtdcAFjTxqr/pNnWtLbM07aSqASFYVNrHjevM+el6zejxGw6J312JQdUXwUAlUHTmIdIniutCE5SfyatiJKtZNbEPfL5YNQwRN4qih7lOvVM7Ryb6l46XkbTfBNmcBiWTyNwsxqShmjNUoS18XB6x+U6kSouXPQYGciLlhQiquEXPkdcOp7O0BKRkOxkYlepWOV6K1AOlrAetriyhlD2xoFOqi945YaYwKpsQMgZ+vRdDFNJp4wjM+72fzBZgrIyk0KETmxBH/HnSPJ3VVkI0hkpq94IbL17PtBTluDvpHN4/0MaTfkgWJY5s/4e8YX/xvO8RHC7r8/sbzWThp/5ovhP15/AVBLAQIUAxQAAAAIAIdc0VxGx01IlQAAAM0AAAAQAAAAAAAAAAAAAACAAQAAAABkb2NQcm9wcy9hcHAueG1sUEsBAhQDFAAAAAgAh1zRXACStDDuAAAAKwIAABEAAAAAAAAAAAAAAIABwwAAAGRvY1Byb3BzL2NvcmUueG1sUEsBAhQDFAAAAAgAh1zRXJlcnCMQBgAAnCcAABMAAAAAAAAAAAAAAIAB4AEAAHhsL3RoZW1lL3RoZW1lMS54bWxQSwECFAMUAAAACACHXNFceEkNdxIJAABkTAAAGAAAAAAAAAAAAAAAgIEhCAAAeGwvd29ya3NoZWV0cy9zaGVldDEueG1sUEsBAhQDFAAAAAgAh1zRXK2YOHbBAwAAhxgAAA0AAAAAAAAAAAAAAIABaREAAHhsL3N0eWxlcy54bWxQSwECFAMUAAAACACHXNFcl4q7HMAAAAATAgAACwAAAAAAAAAAAAAAgAFVFQAAX3JlbHMvLnJlbHNQSwECFAMUAAAACACHXNFcTqJ3PFkBAABAAgAADwAAAAAAAAAAAAAAgAE+FgAAeGwvd29ya2Jvb2sueG1sUEsBAhQDFAAAAAgAh1zRXCQem6KtAAAA+AEAABoAAAAAAAAAAAAAAIABxBcAAHhsL19yZWxzL3dvcmtib29rLnhtbC5yZWxzUEsBAhQDFAAAAAgAh1zRXGWQeZIZAQAAzwMAABMAAAAAAAAAAAAAAIABqRgAAFtDb250ZW50X1R5cGVzXS54bWxQSwUGAAAAAAkACQA+AgAA8xkAAAAA";
// Trainers Excel template base64
const TRAINERS_TEMPLATE_B64 = "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";
// Logo base64
const LOGO_B64 = "data:image/jpeg;base64,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qmuZ4WjC0MhxdWbV8wwtONssqybeNwsPqcmsXQoPG/txX58f3qFABQAUAFABQAUAFABQAUAFABQAUAFAGTruuaV4a0fUde1y9h07SdKtZLy+vJ2xHDDGOwAZpJZGKxQQxq008zxwwo0rojY4jEUcLRq4jEVI06NGDnUnLaMV97bb0ikm5SaSUm0jHEYijhKFXE4iap0aMHOpOWyivxbb0jFXcpNJJtpH42fG74w6r8XvFUmoy+dZ+HdNaa28NaO7cWlmzDfeXSozRtqeoeWkt46lxGqw2kcjw2yO/wCI59nVbOsY6r5oYalzQwtBv4INq8520dWpZOb1suWCbULn4jn2dVs6xjqyvDDUuaGFot/BBvWc1s6tSyc2r292CbjBM8YrwzwwoA+2/wBiPxVe2fjXxH4PaV20zWtCfWEhLEpFqukXVrCssanhDPY31yk7L80v2a1DhhEhT7zgPGThjsTgm26VfDuso9FWozgrpbLmp1JKXfkhf4UfecB4ucMfisE2/ZV8O6yj0VahOCTXRc1OpNSaV3ywTvY/TWv1Q/VAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/R/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP4XPH2jt4e8d+N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/dIWt/GmrWsn+sYHEnhu1lRvuIeNakQne/8AxKywVdQgf824w4iv7TKMDU01jjq0Hv3wsGradK9m7/wXtUifmvGHEXN7TKMFPRXjjq0Hu+uFg10X/L9pvm/hactWEvz9r84PzkKACgAoA+6/2GLPf4m8e6hj/j10LSbPdjp9u1CefGe2f7Ozjvt9q/QOAIXxWY1P5MPRhf8A6+VJS/H2Xbp0P0DgCF8XmFT+TD0Yf+DKjl/7i/qx+ktfqB+oBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf/0/7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD+Q7/AIKPaL/Yf7afxwtQm2O71XwxrUZAwr/274F8L6vM69M/6TeTo5/56K45wTX7fwrU9pkGXPrGFam/L2eIqwX4RT6fO1z/ABb+lBgf7P8AHXj+klaNfGZVjovpL+0OH8pxs2v+4tecX/ei+x8QV9CfgYUAFABQB7T8APjv45/Zz+Jmh/E3wFeeXf6a/wBm1bSJ5JF0rxP4fuJIm1Pw9rEUf+tsr5IkaOQKZrC+htNTszHeWcEi8GZ5bh81wlTCYmN4zV4TSXPRqpPkq027WlF/KUW4SvGTR934ceIfEHhhxVl/FfDtflxGFl7L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VZudScneUpS3fay2SVklZJJJI/Eq1aria1SvXqSq1qs3OpUk7ylJ7t6JeiSSSskkkkZlZGQUAFABQAUAfqD+xBZ+V8NvE18RhrvxtdQA/wB6Oz0PRGUj1Aku5V69Q3Sv1jgOFsrxVT+fHzivNQoYf9ZtdPycv1fgKFsrxdTrPHzj8oYfDtfjN9fuPs+vuD7kKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//1f7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD+cH/AILRaL5Hxx+FHiHZgap8KW0bfjhjoPi7X70rnuUHiJSfQMPUV+q8A1L5djaX8mN9p/4MoUo/+4j/AC/+nTgfZ8f8HZly2+t8HvBc38zy/Osxr29YrM11+100Pxtr7s/h8KACgAoAKACgD9k/+CQXxu+JVh8Wb/4D24bXPhp4g0XXvGF9a3U8obwTqWkW8C/25pHySKLbXLyfTdE1XTWMMM1zd2OpxSxT2lxDqXwnHGX4SWCjmT/d4ulUp0IuK/3iFRv93PbWnFTqQnq0oyg7qUXD+4foV8e8U4fjLE+HlPmzDhXMsBmOd16NWpO+Q4rBU6a/tDB6SSpZhWqYXAYzCtQhOrWw2KhUjUo1IYj+j2vyo/0/CgD/ADb/APguB8cf+F5/8FKf2hby0vPteg/C7VNK+CPh9RJ5i2ifDPTo9I8U2yuDt2n4hy+M7oKgUJ9q2EM6u7gH5L0Aft5/wb4/HH/hT/8AwUh8AeG7y8+y6F8d/BvjX4P6mZJMWwv7uwh8beFC0ZYK11d+KvBWk6HZyBWlRtaljUrFPPuAP9DygA/z/nr/AC/OgD8M/ir4s8U+MfHniHVPGEmNYt9Ru9KexQv9l0eLTbqe2XSbFH5jtrN0lXkeZNM0tzOZLieaV/wLN8Zi8bmGJq41/v41Z0XTu+SgqU5QVGmntGDT7OUrzleUpM/Ac3xmLxuYYmrjX+/jVnRdNX5aEaU5RVGmnqowal2cpOU5XlKTPO68w80KACgAoAKACgD9bP2PbP7L8FrCfGP7R8Qa/eZxjdsuY9Pz7/8AHhtzx0x2Bb9k4KhyZFSlb+LiMTP1tNU7/wDlO3y8mfsfBUOTI6cv+fuJxE/W0lT/APcdun6y+pK+sPrQoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/W/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPwa/4LaaLmP9nXxCi/df4m6LdPjrvXwNfWK57Y8vUTgnnPGMNX6R4f1P8AkaUv+wSol/4URl/7af54/TzwN4eGWZxjtLivA1pd+ZcP4jDx+XJinvrfS1mfgpX6Qf52hQAUAFABQAUAfvn/AMEWPhl5dl8ZfjJd2/Nzc6N8NdBuSmCqWscfifxVEHOSyytdeD2whUBrdt+87Nn5tx9i/ewGAi9lUxdRf4m6NF+VuWv330trzf6LfQT4U5cPxxxxWpa1auB4Wy6ra1o0YxzbOIJ9VOVbJHo1Z0nfmuuX93a/OD/Qo84+MXxK0b4NfCX4n/F3xGVGg/C74feMfiFrIaQRb9N8HeHtR8Q3kSyEHEk0GnvFHgMzSOqqrMQtAH+Td4t8Uaz438VeJvGniO7a/wDEPi/xBrPijXr587r3Wdf1K51XVLtsljuuL67nmOWY5fknk0Ac/QB6X8F/ibrHwW+MHws+MHh4v/bnws+Ingz4h6SiSeWZr/wd4i07xBbW7P08q5k08W8ysCjxSukisjMrAH+sh4W8S6P4z8MeHPGHh27W/wDD/ivQtI8S6FfJ9y90fXdPt9U0y7TBI23NldQTLgnhxyetAG7QB+P37VfhT/hF/jJr00Ufl2fii3s/FFrgcGS/V7bUju6F31eyv5mHULMmeoZvxbi/B/VM7xEkrQxcYYuHrUTjV9W61OpJ/wCI/FuLsH9UzvESStDFxhi4W71E41b7Xbr06sv+3tb6M+cK+YPmAoAKACgAoAKAP2X/AGY7P7D8DPAURGGltNWvG4wW+3eIdXvFJ65/dzoAf7oGMYxX7fwrD2eQZcu8K0/X2mJrT/KS+XyP2/hSHs8gy5Pdwrz/APBmJrTXfpJf8C1j3mvoT6EKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//X/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPx0/4LQaL9o+A/wt8QBNx0r4tR6SWAyUTXPB/ia7bJ6hWfQIgTwC2wHkqG+64CqWzLGUr/AB4Jzt39nXpL7/3n9WZ/Ef06MD7Tw84RzK13g+Mo4O/aOYZJmlZ+dnLLo+V7X6H83Vfqx/l2FABQAUAFABQB/YF/wT7+GX/CrP2SfhDpE9v5Gq+JNDb4ga0WTZNJeeOJ31+yW4TgpcWWg3Wj6XIjAOv2ALIFdWFfh3E+L+uZ3jpp3hSqfVqfZRw69nK3lKopz/7eP9rfo3cKf6o+DPBeCqU/Z4zNMvfEmOvHlnKvn9SWY0FVjuqlDL62BwkotRlH6vyyXMmfZ1eAfuZ+Jf8AwcD/ABx/4U5/wTc+I2gWd59k1746eLPBfwb0lo5MT/Y9Sv5fGPiwCMfM9td+D/Bmu6NdO37pBq8asRJLCjgH+d3QAUAFAH+kx/wRH+OP/C9f+Ca/7O2oXV59r174Z6LqXwT8QoZPNe0l+GGoS6F4Zt5H+8ZJPh+PB18wcBl+2bfnUJI4B+sFAHwt+3B4U+1+G/CPjOCLMuj6pc6FfOoyxs9Yg+1Wkkp7RW13p0kSHPEmo4IO8FfgOPcHz4XB46K1oVZYeo1/z7rR5oN+UZ02l51fM/P+PcHz4XBY6K1oVZ4eo1/JXjzwcvKM6Titd6vW6PzYr8uPy8KACgAoAKACgD9wvgtZ/YfhH8NrfG0nwX4euWXuGvtNt7188DDbrg7hjg5BzX73kUPZ5Nlcf+oHDT+dSlGo+/WX+dtj97yKn7PJsrj/ANQOGn21qUo1H36y/wA7XsenV6p6oUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH/0P7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/N7/AIKpft1az/wT1/ZVu/jl4X8C2Xj/AMYax468OfDfwjpWtS30PhfTtc8Rafr+sjXPFbaXLb6jLolhpnhnUkFnZXunT6jq1zpenjUbFbp7mIA/Kn9hH/g5F+Efxdv7HwB+2h4Z0X4BeMr+5W30z4n+EhrF78GdSknk2wW+v2WqXmteKPh7IHeKFdRv9R8U+HConv8AWNb8N20YRgD+mLQte0PxRo2meIvDWs6V4i8P63ZW+p6NruhajZ6to2r6bdxrNaahpmp2Es9lf2V1Cyy293aTSwTxsskUjIQ1AGrQAUAfHP7dP7OfiP8Aae+A178O/CGo6Npviex8SaN4t0V9ekuYNMurrR4NStZNPmu7S3u5bOS8s9UuYoLk2s0STbFnEULvPF73Dma0sozKOKrxqSoypVKFT2dnOMZuElJKVlLllCLaum1e12rS/EfpBeGOaeLHh5X4ZyXFYHC5th80wOc4GWYyq08LWrYKniqUsNOtRp1Z0JVqOKqxp1fZVIKdo1FGEpVIfyi/Ff4L/FH4HeJZfCfxU8F614P1lTI1sNRtw2n6rBEwR7zQ9YtnuNK1uxDMFN5pd7dQJJmKRkmVo0/ZsFj8HmNFV8HiKdem7X5H70G/s1KbtOnL+7OMX1V1qf49cY8C8W8AZrLJuL8ix2SY5c7pLE008NjKcJcrr4DG0pVMHj8Om1H2+ErVacZe5KSmpRj5fXYfJBQAUAFAHpXwb+H118V/ix8OPhtaCQSeN/Gnh3w5LLEMva2Wp6nbW+pX56kR6fp7XV9KwBKxW8jANtxXJj8VHBYLFYuVrYfD1aqT+1KEG4R9ZSSivNn1XA/DdbjHjHhfhajzKWf57lmVznDejh8Xi6VPFYjraOGwzrYibtpClJq9j+32ys7XTrO00+xgjtbKxtoLOztoV2xW9raxJDbwRL/DHDEiRovZVA7V/PcpSlKUpNuUm5Sb3cm7tvzbdz/fGhQo4ahRw2Hpxo0MPSp0KFKCtClRpQVOnTgukYQjGMV0SsWaRqfxe/8AB0l8cf7W+K37NH7Oen3mYPBXgjxN8XPEtrC+6KXU/HusL4V8MJeAEql5pWneB/EFxBGQkq2niTzXDR3Fu1AH8pNABQAUAf2E/wDBrN8cfM079qT9mzULzBtbzwl8cPCdhvyXW9h/4QP4gXYjLfKIjYfDSLeincZyJCm2PzQD+u+gDy741eE/+E1+FnjXw+kfm3U+iz3unIBl21PSCuq6fGhALK013ZxW5K87JXXkMyP5Oe4P69lGPwyV5yoSqUl1dWjatSS6+9Omo6W0k11al5Oe4P69lGPw6XNOVCVSkurq0f31NLs5Tgo+ak0z8QK/BT8FCgAoAKACgD6O+FX7MvxA+JP2bUrq3PhPwtNsk/trV7dxc3kDc7tH0omG5vg6kNHczvZae6ktHeyunlN9PlHCuY5py1Zx+p4SVn7etF81SPehR92VTTVSlKFN9Ju3LP6bKOFcxzTlqyj9TwkrP29aL5px70KL5JVLq1pSlGm+k21yn63aHpUOhaLo+h2zvJb6Npen6VbyOFDvDp1pFaRO4XCh2jhVmCjaCSBgYr9jw9GOHoUMPFtxoUadGLe7jSgoJu2l2o9D9lw9GOHoUcPBtxoUqdGLdruNKEYJu1ldqOtlbtY1K2NQoA5vxf4x8JfD/wAM6z408d+J9A8GeEPDljLqWv8AijxTq9hoPh/RdPgx5t7qmsapcWthYWyFlDTXM8abmVc7mUUAfy/ftwf8HLfgT4e61P4H/Yf8C6H8YtS029MOrfFr4oWfiPT/AIaTfZ3KT2nhHwnpWp+GfGHieKU7kHiDUdX8KWMTxeZp1h4hsLmG+UA/bj/gm3+2Lf8A7dv7I/w9/aI1rwXF4C8Ra/eeJfD3iXQLCe6utB/t3wlrl3ol9qXhm7vf9Mm0LU/s8d5bQ3b3FzpdzLd6LPe6jJprajdgH3bQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//9H+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPn39qn9nDwD+1v+z/8AE79nv4k2wfw18R/DlxpS6jHBHPfeGtet3jv/AAz4u0lZdqf2t4W1+107W7BXZYbiayFpdb7O5uIpQD/Lo+P3wP8AH37Nnxn+I/wK+J+mHSvHHwx8Uah4Y1uFRJ9lvPszLLp2t6XJLHE9zoniLSZ7DXtCvSii+0fUrG7CqswWgD6z/Yc/4Kh/tZfsEazBH8JfGza/8Mp743ev/BXx095rnw41bzpN97cabp/2qC98H63c5Mj674TvNJurqdLb+2Y9ZsoTZOAf20fsB/8ABaP9kz9uZNH8HNq6/BH49XqQwSfCD4g6pZxjX9RcDfF8NvGJSx0jxwjuSLfS/I0Xxg6xzzP4WWyhF64B+v1ABQBw/wAQvhp4B+LHhq78H/EjwlofjLw3e8y6XrljHdxxTbWRLyymO2603UIA7G21LTp7a/tWO+2uInG9enC4vE4KtGvhK9ShVjtOnK111jJaxnF9YTUoy6p/Z8DiXhXhzjHKq2ScUZNgM8yuvrPCZhh4VoxnZqNbDzdquFxNNN+yxWGq0cTRfvUqsJan4Z/tNf8ABIDVtN/tDxZ+zJrTa1ZDzbmT4X+LL6GHWIF5c2/hfxVcmCy1JQSEt9P8RtY3McKZk1/U7l1jr9DyjjiE+Wjm9P2ctEsZQi3TfnWoL3oPq50nOLe1KEbuP+f/AIq/QpxmF+s5x4U4946guerLhPOcRCGNprf2eU5xVlDD4pK/LTwuafV6sIRvLM8VWlGEvxV8V+EfFPgXXtQ8LeM/D2s+FvEelTeRqOia/p11pep2knVfOtLyKKYJIpEkMoUxTxMs0LvG6NX39GvRxFONahVp1qU1eFSnKM4SXlKLa02avdPR2aP4RzjJc34fzHE5RnmWY7KMzwc/Z4nAZjhq2ExVGXTno1oQmoyXvU52cKkGp05ShJSOdrU8wKAP1Q/4JFfDL/hMf2nLnxxdW/mab8KfBmsa1FMy7408Q+JF/wCEW0iBgflDvpmoeIr2F25SXTldAXCunx3G+L9hlCw8XaeNxFOm119lS/fTe6+3ClF73U7Pex/Xf0L+FP7c8V6uf1qXNheD8jxuPhUceaEczzRf2RgqcuilLCYjM69Nu7U8KnG0kmf1AV+QH+soUAf5l3/BXv44/wDDQP8AwUY/ai8ZW159s0Pw98QJ/hZ4aaOTzLRdF+E1na/D7z9PbkNZavqnh/U/EEcinZNJq8s6bUlVVAPzYoAKACgD9e/+CFnxx/4Uf/wUr+BDXd59k0H4uPr3wO1/955f2r/hYOnlPCNp1Ct5vxI0zwS2x87tnyDzQlAH+j7QAUAfht8XvCn/AAhHxL8Z+Glj8q2sNcupdPTbtC6VqBGpaUB0Bxp13aqSo2lgduAK/A86wf1DNcdhUuWNPETdJf8ATmp+9o+v7qcV6/M/As5wf1DNMdhUuWFPETdNbWo1P3tFddqU4/pa9jzivLPMCgD1L4b/AAb8e/FK7EXhjR3/ALNSXy7vxBqG+z0OzIxvD3pic3M6AgtZ2Ed1eAMrNCsZLr6+V5HmObzthKL9knaeJq3p4eHdOpZucl/JTjOa3cVH3j18syTMc2mlhaD9lzWniat4Yen3vPVzkusKSnPZ8qWp+kPwq/ZZ8BfD37NqmsRp4y8TxbJRqGqW6DS7CYYYHS9HcywK8bYMd5fPeXSugmtzZ7jCv6flHCWXZby1ayWOxas/aVoL2VOS/wCfNFuaTT1U6ntJ3V4uGp+nZRwll2W8lavFY3Fqz9pVivY05LX9zRblFNNJqpU55pq8eS7R9O19UfVhQAUAfiX+3/8A8Fzf2VP2MP7b8B+CLy3/AGiPj3YfaLJ/AngfWLYeEvCOqR7ozH8Q/H0EWoabplxZzJIl34a0CHXvE8NzB9h1ax8PpOmoqAfxRftof8FGP2q/28PEx1b46fEG4fwlZXz3nhj4T+FBc6B8L/ChO9YX07w0l1cHVNThjkkiHiPxPea74laGWS2/tZbMR2qAHk37JP7M/jz9sD9ob4Y/s8/DqFhrvxC8QQ2N7q7273Fj4V8MWaPqHirxfqqo0f8AxLvDWgW19qs0Xmxy30tvDploXv720hlAP9RT4G/BjwH+zv8ACD4d/BD4Y6UujeBPhl4X03wr4eszsa4lt7CL/SdT1KaOOIXmta3fvd61rmoNGsupaxf31/MPOuHNAHq1ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH/9L+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD+WT/AIOQ/wBgD/hYPw70b9ub4aaJ5vjH4V2Nl4T+N9np9vm4134ZTXZj8O+NJYoF33F94C1e9Om6tcmOWeTwnrUV3d3Nvpfg1FUA/iioAfHI8TpLE7xyRuskckbFHjdCGR0dSGV1YBlZSCpAIIIz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PEC7RHVdavLy4trZ5ZzYWLWunJNJDZxtX8vZ1mtbOszxeZV1yyxFS8KabapUYJQo0k+vs6cYxlLTmledk5NH9xcNZDhuGskwGTYV88MHStUrNKMsRiaknUxNeS6e1rTnKMG5ezhyU1KSime9V5R7oUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//0P7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPxE/b1/4JZaZ8QP7a+MH7Nel2WieOm+0an4o+GFt5Gn6F4xlO6a51LwoGMdnoXieZtz3GlN9n0TXJD50L6XqgnfWf6D8N/GKrlnsMj4srVMRly5aWDzifPVxOBWkY0cbZyqYnCRVlCsubEYZe6/b0eVYf8AzK+lX9BfBcW/2j4h+DGBwuV8Uy9rjc84JoqlhMq4iqa1K2MyJP2eHyvO6jvKtgX7LLc0m/aU3gcd7WeP/nB1TS9T0PUr/Rta06+0jV9KvLjT9T0vUrWex1HTr+0leC6sr6zuY4bi1uraZHint54o5YpEZJEVgVr+qaNajiKVOvh6tOvQrQjVo1qM41KVWnNc0KlOpByjOE4tSjKLcZJprQ/xux2BxuV43F5bmWDxWX5hgMRWwmNwONoVcLjMHisPOVKvhsVhq8Y1qFejUjKnVo1YxqU5xcZxTVo0K0OUKACgAoAKACgAoAmt7ie0nhurWaa2ubaa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uJZWLt/PWOx+LzLFVcZjq88Ria0rzqTf3RjFJRhTitIU4JQhFWiktD+usryrL8lwNDLcswtPCYPDx5adGkuv2qlSTbnVq1H71SrUlOpUleU5Ns9DrkPQCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//0v7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Xv2pP2SfhT+1h4KPhrx9p32LX9NiuG8H+PdLghHiXwnfSjO62mfYNR0e5kCf2r4fvXNjfooljay1KGy1K0+w4O42zngvMPreW1faYatKKx2W1pS+qY2nHZTS/hV4Jv2OJpr2lJ6P2lKVSlP8AD/HLwA4D8e+GnkvFmD+rZtg6dWXD3FWBp01nWQYqor3o1JJLGZdWmo/XspxMvquLhHnhLDYylh8bh/5Lf2nP2U/iv+yn43fwn8RdL87Sr6S4l8JeNtMjmk8MeLtOhYZuNOunXNrqNujxDVNDvCmo6bI6M6TWM9jf3f8AanCPGWS8ZZesbldblrU1FY3L6risXgasl8NWCk1OlJp+xxFO9Kqk0nGpGpSh/gP42+A/HngPxPLIOL8D7TA4qVapkHE2ChVlknEGDpyV6uDrzSdHGUYygsdlmI5MZgpzg5RqYWthcVivmqvrD8XCgAoAKACgAoAKAP6rv+CUP7U3/C6/gp/wqrxVqX2j4i/Ba1sdIV7mXdd698PnH2fwvqwLkPcT6IIj4Z1NkWQxRWuiXd5M1zrGW/jXxn4O/sDP/wC2sHS5cqz+dSu1Be5hszXv4yhorRjiL/W6KdrueIp004UPd/3f+gX46f8AES/DT/UTPcZ7XjDw2oYXL1KtU5sRm3CU17HI8feT5qtXLFTeSY2UVNwhQyzEYio6+Ye9+rVfjJ/eI1lV1ZHVXR1KujAMrKwwyspyGVgSCCMEcHPNAH+cn/wWt/YCb9h39rHVb3wXozWPwE+Oj6r8QPhO1tAU03w5dtdxt41+G0TBVjj/AOEN1a/t7jR7dQRF4O13wxE8095DfsgB+OtAH7r/APBC3/gpEv7Fv7QDfCT4n62tl+zn8f8AVtL0rxJeX0wTT/h18Qzs03wt8RDJKwhstHuRJF4c8cykwRDRZNM1+8nePwjBazgH+hACGAZSGVgCrA5BB5BBGQQRyCDz70ALQAUAFABQAUAFABQAUAFABQAUAFABQBBdXVtY21xe3txBaWdpBNdXd3dTR29ta21vG0s9xcTyssUMEMSPLNNIyxxxqzuwUEqAf50H/BaT/go1L+3l+0lJo/gPVJZP2dPghcax4W+FMUTPHbeMNSnmhh8VfFG5iOGc+KLiwtrXw0k4VrPwjp2lSm10/U9V1yKcA/G2gD94f+CCP7AH/DWv7UMXxj+IGifbfgX+zXf6R4r1eK+t/M03xn8Tmka88BeDCky+Rf2OnXFo3jDxRb4uYP7P0vS9E1S3W28VwSUAf6C9ABQB/Mr/AMF2v2lfEV5rngv9l/QbTWtO8JaSln488eavNYX1lpnijxHcQP8A8Iz4f0++lihttVsfDem3EusamLWW8s31jVtNhl8nUfDjqn7T4XZNRjTxOd1ZUp16jlhcLTU4SnQoxf7+rOCblTlWmlThzKMlThNq8KyZ/NnjjxHiJ18HwzQhWp4SioY7HVXCpClicTKL+rYenNqMasMNTk61Tk54OtVpptVMNJR/nRr9fP56CgAoAKACgAoAKAP3p/4Jx/8ABI3V/ix/YPxw/af0nUPD/wAL3+zar4Q+GFz9o03xD8Q4DtmtdU8S7fJvfD/gy4XZJa2imDW/EsDfaIn0vR3tb3WfyzjDj+ngPa5ZklSFXGrmp4jGxtOlhHtKFHaNXEx+1K0qVF6P2lTmhD908O/CetmvsM64mpVMPlj5auEyyXNTxGYLSUamJ2nh8HJaxh7tfEx96PsqLjOv/U7o+jaT4e0nTdB0DS9P0TRNGsbXTNI0fSbO30/TNL06yhW3s7DT7C0jitbOztYI0ht7a3iSGGJFjjRVUBfw2pUqVak6tWc6lWpKU6lSpJznOcneU5yk3KUpNtyk223q273P6go0aOHpU6GHpU6FCjCNKjRpQjTpUqcFywp06cUowhGKSjGKtFKyvoaVQaBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH/0/7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPN/ix8I/h78b/BGrfDz4neGrHxR4W1iP97aXalbiyu0R1ttV0i/j23ek6xZGR2s9SsZoLqDdJGHaGWaNvVyXO804ezChmmUYupg8ZQek4O8akG050a9N3hWoVLL2lKpGUJWTtzKEo/G8e+H/AAj4m8M5hwhxtkuFzzI8wj+8w+Ii41sNiIxkqOPy/FQccRgMwwznKWHxuFnTr0+aUeZ05zhP+Uz9tv8A4J8/EP8AZP1a48TaP9u8cfBPULwR6P41itg1/wCHXuZdtrofjm2tUWLT77cyW9nrcMcWja45iMA0/UJn0a1/szw+8Tcr40oRwlf2eX8QUqd6+XudqeKUFeeIy6c23Vp2TnUw8pPEYdc3N7WlH6xP/B36TP0SeL/ATH1s7y761xP4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Xbpp3lgcVJJRWNwqajJpQjiKXJiKcI806dD80K9U/MQoAKAPs/8A4J0eJf8AhE/28/2QNYMnlRt+0P8ACvRZ5c4WO28T+LdM8M3TueMRrb6vKZD/AM8w2c4xXDmcOfLsbH/qGrS/8Ag5/f7p9r4b4n6px9wdWvZPiPKaEn2jisZSws2/LlrO/kf6VNflp/pmFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//1/7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCGe5t7VBLdTw20bSRQrJPKkKNLPIsUMQeRlUyTSsscScs8jKiqzMooAmoAKACgAoAKACgAoAKACgAoAKACgAoAKAP4/v+Ch0GoW/7Zvx4TUldLh/EukzxBxgnT7nwl4en0phyco+mSWjIe6EHAzhf3HhdxeQ5a4O69lNP/Eq9VTXympI/wAU/pLU8TT8cvEOOKTVR5pg6kOZWvhquTZZUwjW908LOi4vqtdNj4wr3z8LCgDvvhh8MvGfxi8d+Hfhx4A0iXW/FPie+Sy0+0TKQQoAZLvUdQuMFLLStMtUmvtSvpf3dpZwSzNnaEfmxmLw+Bw1XFYmoqdGjHmlJ7vpGEV9qc5NRhFXcpNLreP0fCfCmecb8Q5Zwxw5gp4/N82xEaGGoxuqdONnKticTV+HD4TC0Yzr4rET9yjRpzm72UZf17fsofsweDP2VvhfY+CPDqxal4i1DyNS8d+MGgEV74p8Q+TteXndLbaLpoeS00HS95Sysy80vm6le6le3f4fnWb185xksRVvClG8MNQveNGlfbopVJaSqTsuaWitCMIx/wBpvB7wmyPwh4Sw+QZYoYrM8T7PFcQ506fJXzfM+S0p63lSwOFUpUcuwfM44ejzTk6mKr4uvV+nK8g/VwoAKACgD+Xb/g6V8Gfbv2av2ZviF5W4+Fvjlrng3ztufKHjzwFqmtGPd2Ex+HStj+IwjkbQGAP4kKACgAoA/u8/4Ni/Bn9ifsLfE/xfNFsuvHH7SXir7PLtx52jeGvAPw60u0+bq3l6vL4gXsBnA53FgD+jygAoAKACgD5//ae/Zp+Fv7W3wY8W/BD4u6ONT8MeJ7bfZ6hbrEmt+FPEVqkp0Txd4ZvZY5P7P1/RLiVpbabY9veW0l5pOpwXmkajqFlddOExVbBV4YijK0ovVP4ZxfxQmusZdezs1ZpSj89xRwzlXF+S4zIs4o+1wuKjeFSPKq+ExME/YYzCzafs8RQk24Ss4zi50asZ0atSEv8AOy/bK/ZC+KX7E/xx8R/Bb4n2hmezY6p4N8X2ltLBoXj/AMGXU80ekeKtEaRpAiXCwyWuq6aZ57jQ9Ztr/SLmWZ7UTy/peBxtHH4eNei99Jwb96nNfFCW+26f2otSVr2P85ONODs14Hz3E5JmkOZw/e4LGQi1QzDBTlJUcXQbvpJJwrU7uVCvGpRldwUpfKldh8mFAHvP7LFrq19+07+zlZaAkkmu3fx3+EVto0cK7pX1Wb4geHo9PWNQRlzdtFtGRz3HWufFuKwmKcvhWHrOX+FU5X/C57/CkK1TinhqGHTdeef5PGilq/ayzHDKnbbXnt1+4/0/6/Jz/UkKACgAoAKACgAoAKACgAoAKACgAoAKAIbe5truFbi0uIbqBywSe3lSeFyjtG4WWNmRijqyNhjtdWU4YEUATUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//0P7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD+Uz/g5E/Zb/AGyPjTf/AAb+JXwi8MeNPib+z98OPBetJ4v8F+BRdazqHg/x4+tXV3eePNV8GadI+ravY6j4Xk0zTode07TNUTwxB4f1dtUm0e01RJb0A/nj/Zr/AOCuH/BQH9lNrHTPAXx+8UeI/COmMkP/AArr4tE/EvwglrAQBpdlbeKHutd8L2SsvzQeD9c8NyBt48xd8m4A/oO/Zo/4Ohvh/rP9n6H+1n8A9a8FXz+VDdePvgrfL4p8NvM+A91eeA/FF5p/iHQ9PhOWk/s7xX41v2U4isnddjgH9BP7OX7eX7H/AO1nbW7/AAB+P/w98earPB9obwemqnw/8QLWIIXke8+H3ieLRvGdtDHh1a6k0P7GzRyeVcSKpZQD64oAKACgAoAKACgAoAKACgAoAKAPxa/4Kk/sU+KPihLZ/tBfCbRbjXvFOiaNFo3xB8KaXA9xq+uaLpplfSvEmjWcQabUtT0iCWTTtT0+BZby70qLTZLGJm024SX77g7P6ODUssxtRUqNSo6mFrTdqdOpOynRqSekITaU4TfLGM3NSvzxlH+FfpceBGbcWyoeJPBuBq5jm+AwMMDxJk+Epyq43MMBhXOWEzTA0YXqYnF4KnOWGxeGpxnXr4OGGnh6blhakK/868kckUjxSo8UsTtHJHIrJJHIjFXR0YBkdGBVlYBlYEEAgiv1JO+q1T1TXU/zLlGUJShOMoThJxlCScZRlF2lGUXZqSas01dPR2szoPCXhDxR498RaX4S8F6BqvifxLrVylppeiaLZTX+oXk79o4IFZljjUNLcXEmy3tYEkuLiSOGN3XKvXo4alOviKsKNKmuadSpJRjFebdtW9Elq3ort2PSybJc34izPCZNkWXYzNs1x9WNHCYDAUJ4jE16kv5adNSahBXnUqTtTpU4yqVJQhCc4/1V/sE/sVaT+yx4GbWvE0FlqXxo8ZWUJ8XavEY7qLw5p7NHcw+CtCuhlfsdpKkU2tX1vhda1aJZPNm0/T9IWL8a4k4gnnOI9nRcoYChJ+wg7p1pap4ipGy95q6pxl/Dg7WU5zP9fPo7eBGD8IeH3js1p4fFcdZ5QpvOsbBxrQyzDNxq08iy+srp0KM4xqY/EUpcuOxsFK88NhsE4/oFXzJ/SAUAFABQAUAfhV/wcXeDP+Eo/wCCZ3jPXPK8z/hXHxY+EnjPftz5H27xBL8PPNz/AA5/4TzyN3/Tbb/FQB/nuUAFABQB/o3/APBBTwZ/wh//AAS3/Z1llh8m98YXfxT8Z3oxjf8A2r8V/GVnpcxPBbzfD+maPJnHAYKNyqGYA/YmgAoAKACgAoA+C/8AgoX+wb8O/wBvf4HX3w98R/Y9B+Ifh1b3WvhF8Rja+beeDfFMkCK1teNErXN34R8Ri3ttP8VaOm9bi2jtdTtY11rR9Iubf0ctzCrl2IVWN5UpWjWpdJw7rVJTjduDvvo7xlI+A8ReAcu8QMiqZdieTD5jhvaV8nzLlvPBYtxXuz5feng8Tyxp4ujrzQUKsEq1GlOP+fF8e/2fPi/+zJ8SNb+FHxs8E6v4J8Y6JPIpttQgY6drNgJXittd8Nasi/YPEHh/UPLZ7HWNMnuLSYK8ReO5huLeL9Iw+JoYulGtQqRqQl1W8X1jOOjjJdYy16q6dz/PHiDh3OeF8yr5TnmBrYHGUJNctSP7uvT5mo18LWS9niMPUtenWpSlCWqbUlKMfGK3PEP6cP8Aghf/AMExvH2rfE3wx+2j8cvC2oeFPAXghJdV+CnhzxDZTWGr+OvFl3aSW2n+Ozpl0kdzb+EPDdtcy6j4fv544Tr3iBtK1LSnn0vSrh7/AOU4gzWnGlLA4eanUqaV5Rd1Tgt6d1Zc82kpLXljzJ2bP6h8CPC7MK2aYXjbPcJUwmX4FOtkeGxMJU62Pxc4ONPH+yklKODwsZOrhqkox9viPZVaLdKi5T/sIr4o/scKACgAoAKACgAoAKACgAoAKAPi/wDaS/4KH/sX/slR3kXx2/aD8A+FfEFmjM/gXTtQk8XfEV32/uk/4QLwjDrfim2S4fEUV7qGmWWmq5JnvYY0klQA/ny/aW/4OifDtj/aGifsj/s+X2u3C+bFafEH47agNJ0tZEygnt/hx4M1G41PUrOZv31vNe+PvD12saotzpSSSukAB/Pr+0f/AMFS/wBvr9rqe50b4lfH3xsvhrWZvscfwz+Grf8ACv8AwXcxXb+XDpFz4e8Gpp0/iqJpJBHbp4su/EV+7si/aZGCBQD+n/8A4Nx/2X/2wvgB4G+N3iL48eHPF/w0+EHxJTwTqPww+HHjkz6frVz4htDrh8QeNrbwbfSDU/BtrfaVcaPp1xJqdhpN74qEWn3JtZ7LRLC6cA/pooAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD//0f7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/LH9tn/gjz+xd+28uq+IfFvgQfDL4vXyyyp8Y/hVFY+G/FF7fuCy3HjDSxaS+G/HaySiFbu58RaZP4hNnF9k0zxFpIYSIAfyAftt/8EJv20P2Rf7X8V+FNB/4aQ+Dth59z/wnXwr0q+uPE2jabFlvtHjT4ZeZfeI9G8qCOW5vb/w/P4u8N6dax+fqPiGyZhDQB+LlvcXen3cN1aT3FlfWVxHPb3NvLLbXdpdW8geKaGaNlmguIJUV45EZZI5FDKwYAqAfqv8As0/8Frv+Ch/7Mn9n6bo/xuvvix4NsPKRfA/x2gm+JWltbw4WK0t/EV9e2fxC0mzgiBht7HRfGem2EMe1RassUKoAf0Ifs0/8HPHwC8Yf2fon7Unwb8YfBvV5PKgufGvw9uP+FleBGk487UL/AEZ4dH8b6Ba9dljpdh47ul2jNy28lAD9/fgF+13+zH+1JpQ1f9n744/Dr4pRrbi6utL8OeIbU+KdKgbbtfXfBt+bLxd4eJDLiPW9E0+T5vunrQB9GUAFABQAUAFABQAUAFABQB4N4/8A2Xf2dvilqcuuePvg18P/ABHrlw++61y58O2Vtrd63Y3+r6elpqN9tx8ovLmYLk7cZYN6WGzjNMHBU8Nj8VSppWjTVWTpxX92EuaEP+3Y/fZOP55xH4S+GfF2LnmHEXA/DeaZhVfNWzCrllClj676PEY3Dxo4rEW6e2rzS1sop2l1vw7+DHwl+ElvNb/DL4ceDPAy3SCO8n8NeH9N0y+v0VgyrqOpW9uuoaiFIUp9tuZ9m1QuNo24YrH43HNPF4rEYjld4qrVnOMX/cg3yw0/lS893zezwzwNwbwZTqUuFOF8j4fVaKjXqZXluFwuIxEU7pYrFU6UcTibNJx9vVq25Va1kj0yuQ+qCgAoAKACgAoA/N7/AIK++DP+E8/4Jofti6H5XnfYfhHfeM9m3dj/AIVxrOjfEPzcf9MP+EX8/d/D5e7tQB/mUUAFABQB/qSf8E4PBn/Cv/2BP2N/C7ReRcW37OHwj1PUIMbTDq3iTwZpPiXWImHd49U1e7R243MC2BuxQB9qUAFABQAUAFABQB5l8Uvgt8IfjhoK+GPjH8MfAfxQ8PxO81vpXjzwrovii0sriRQrXenprFndtp17hF23tgbe7QqhSZSqldaNevh5c9CrUpS6unOUG7dHy2utdnp63seZmuSZPnuHWFznK8BmuHTco0cwwlDFwhJ/bpqtCfs6mitUpuE1ZNSVkfP/AIB/4J2/sM/DDxBB4q8E/sr/AAX0nxFZzpdafq9z4L03XLzS7uNt8V3pEniBNVGkXcTAGK60xbWeLkRypkmumpmeYVYuFTGV5RejXO4prs+Vq67qV/OT3j87l/hzwJleIji8DwpklHEwkp060sDSrzpTTup0XiPbexmmtJUlCS6NXPs2uE+1CgAoAKACgAoAKACgAoA+Xv2hv21v2Uf2UrCS9/aC+PPw7+G1wlv9qh8O6prceoeN7+3KbxNpPgHQk1TxrrERXH7zTNBu0BeMMy+Ym8A/n7/aW/4OgPhB4a/tDQ/2U/gb4n+J2px+bBbeOviver4E8HJMufKv7DwppD6v4t8Q2D/KPs+qX3gG+BZywXYglAP57/2lv+CyP/BQn9qL+0NO8W/HjWvh/wCDdQ81H8AfBVJPhh4bFrNkTafd32iXLeM/EGnyKQkln4r8Wa9AyKAU5cMAfmIBdX90FUXF5e3twAqgSXN1d3VxJgAAbpZ7ieV8ADdJLI/dm+YA/cv9iT/ggR+2P+1P/ZHi/wCKOnn9mD4RX3kXX9vfEfSLqT4ia3p8mH8zwv8AC7z9P1hBNGVeG+8ZXnhCwmt5UvtMfWIwYHAP6/P2LP8Agk7+xl+w3b6fq3wz+HUXi74pWsSi5+M/xMFn4q+IJuSm2aXQJnsrbRfBEL7pI/K8HaTo1xPassGqXmqOhuGAP0poAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//0v7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD8p/22v8Agjh+xb+22NW8R+JPA4+FXxh1ATTr8YfhRBYeHvEN/qLgsLnxnof2Z/DXjoTSiIXt5rmnf8JNJaRfZNP8TaUp82gD+P8A/bb/AOCF/wC2l+yB/a/ivw94d/4aK+Dmn+fc/wDCwfhTpd9d69o+mxbm+0+NfhtuvvE2geVDHLc39/oz+KvC+m2yebf+JbZmEVAH4wEEEgggg4IPBBHUEdiDQBpaLres+G9Vsdd8O6vqeg63pdwl3pms6Lf3Wl6rp13HzHdWOoWMsF3aXEZzsmt5o5E6q3WgD9hP2af+C8f/AAUQ/Z1/s/S9T+J9p8fvBtn5UZ8NfHixn8X6j9nGElNv8QLS90j4iG68kBbZ9W8TazYW8ipIdKmXzI5QD+hD9mj/AIOY/wBk74j/ANn6L+0d8PvHX7O/iCfyornxFpqS/FT4bK/Eb3E1/oGn2HjrThM5EqWieBdYhtIiyz6vKYvMnAP3r+DH7RXwH/aL8PjxR8Cvi98PfivoqxxyXVx4H8U6TrtxpZl+5Brem2dy+p6DednsNasrC9jJxJbqSBQB7NQAUAFABQAUAFABQAUAFABQAUAFABQAUAeI/tMeDP8AhY/7OH7QPw88n7R/wnnwS+K3gzyNu7zv+En8Ca9onlbed3mG+24xznHOaAP8nWgAoAs2dnc6heWlhZxPcXl9cwWdrAgy81zcypDBEg4y8krqijPJYdKAP9cXwL4XtvBHgjwd4Ls9n2Pwh4V8PeF7XyxhPs2gaRaaVBsHGE8q0XaMcDA4xQB1VABQAUAFABQAUAFABQAUAFABQAUAFABQB4P8cv2of2dv2Z9E/wCEg+Pnxo+HfwpsJIHns4vGHibTtO1jV0j3b10Dw75sniDxFcDY/wDomhaXqFydjkRHY4UA/Av9pb/g5u/Zm8Cf2hov7Mvws8b/AB51uLzYbbxb4pZvhZ8OyxysN7ZxajY6p491eOMjzZdPv/CvhJpkKRx6lEzO8AB/Pf8AtLf8Fyv+CiX7SX9oaY3xfPwS8G3vmp/wiHwFtLjwABbvlPKuPGgvtT+JF0JID5V3A3jFNNud0mdNiRyigH5IajqOoavf3eqatf3uqanqFxLd3+o6jdT3t/e3U7mSa5u7y5eS4ubiZ2LyzTSPJI7FnYkksAVYopJpI4YY3llldIoookaSSWSRgqRxooLO7sQqIoLMxAAJIFAH7i/sSf8ABBD9sr9qz+yPF3xG0s/sx/CC+8i6/wCEm+Jek3Z8e63p0m1vN8J/C3zdP1yXzYmSa2vvF914O0m7tZVvNLvdURfIcA/r9/Yq/wCCSf7GP7DkOm618O/h7H42+K1pHGZ/jP8AE9bLxT47S724lm8NBrO30LwNEWaWOMeEdJ0nUJbR1ttV1PVmUzsAfpnQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH/0/7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPyc/ba/4Iy/sWftrjVvEuteCv+FQ/GLUPOuB8XvhPbWGgaxqWpSZf7V428OeQ3hnxwJpvLN/e6rp8Hime2j+y2XirTUIdQD+P79tv/ghz+2n+x3/AGv4q0nw1/w0H8HNP8+5/wCFj/CfTb+/1TSNNi3N9q8b/DvN34n8NeVAj3N/qGnf8JP4U02BQ134oVzsUA/GugAoA6bwh408Y/D7xBYeLPAXizxN4I8U6VJ5ul+JfCGu6p4a8QabLx+9sNZ0a6stRs5MgHfb3MbcDkYBUA/ar9mn/g4S/wCCgPwJ/s/SPHviXw3+0l4OtPKhfTfi3phXxfFZpjeth8RfDTaTr9xqEhH/ACEfGMfjQruYG3kGwoAf0Ifs0/8AByL+xJ8Xf7P0f43aP44/Zm8VXPlRT3PiGzl+IPw5+1TYRYbXxl4QsP7ehTzciW71/wACeH9Nto2SWfUEjErxAH7pfDD4wfCj42eGoPGPwf8AiV4F+KHhW42BPEHgHxVovivSlkdd/wBmnvNEvb2K1vEGVms7lobuB1eOeGORHRQD0agAoAKACgAoAKACgAoAKACgAoARlDAqwDKwKsrAEMCMEEHggjgg8EcGgD/JQ+Mfg0/Dr4u/FT4fNGYW8C/Ejxx4NaIjBiPhjxPqmiGMg8gobHaQemKAPN6APpP9jTwZ/wALF/a8/Zb8BGLz4vGP7Q/wY8N3KFdyiy1f4i+HbK+kkGD+5hs5p5piQQsSOxBAIoA/1ZaACgAoAKACgAoAKACgAoAKACgAoA8q+Lfx0+DHwE8OP4u+NfxU8AfCrw2ol8vVvHvirRvDNveSQrua100areW02q3zblWLT9Niu76eR0igt5ZHRaAPwg/aW/4OVf2N/hb/AGho3wB8JeO/2lPEtv5sVvqtvBL8MfhsZ0zGd/iPxVps/i+68uX5lOn/AA/nsLyJGa31ZEkjlcA/nv8A2lv+C/n/AAUL/aA/tDSfC3jvR/2dfBt35sSaJ8EtNk0fxC1scrCbv4jazc6x42g1BEY+bd+GNU8K20rneNOTaiIAfjP4k8T+JfGWt6h4l8X+Idc8VeI9WnNzquv+JNWv9c1vU7luGuNQ1XVLi6vrydgADLcTySHGCeMUAYdADkR5XSONGkkkZUjjRS7u7naqIq5ZmZiFVVGSTgZJoA/bv9iT/ggx+2b+1l/ZHi3x5o5/Zn+D995Fz/wl3xP0m8TxprWnS4bz/CHwuMth4gvvNheK4tL/AMU3Xg3Qr60lF1peq6kF8hgD+v79ij/gkT+xf+w9Hpmu+BPACeP/AItWSRvL8Zvikll4n8aQXoX55/Ctu1pB4f8AAsau0scEnhXSNO1h7OQWuq63q23zmAP09oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/U/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD8kf22/8Agi3+xZ+2n/a/ifUPB3/CmPjHqHn3H/C2fhNaWGiX+qalJuf7V438KeSvhjxt502x9Qvr2zsvFdzCgt7fxXYocsAfx/ftt/8ABEP9tP8AY2/tfxTaeFv+F9/BvT/Puf8AhZvwm0+/1K60jTYtzfavHHgHFx4n8KeVArXGoahbL4g8J6fGMTeKmclKAPx2oAKACgDvvhx8Vfid8HfEtt4y+E3xD8bfDPxZZ7Rb+I/AfijWvCetRoHD+T/aWh3tjdPbuyjzbaSVreZcpLGyEqwB+5X7NP8AwcdftzfBz+z9H+Mdr4K/aa8J2vlxTN4vsYvBXxDFpFgLBZeOfCFjDp8spTcJb/xP4M8VajO215btmDtKAf0Ifs0/8HD37Avxx/s/R/iRq/iv9mnxhdeVC9n8T9LOo+Cpr2TG6PT/AIh+FRqem29jGCd2peMdN8FQ5RgYxmPeAftp4J8e+BviX4dsfF/w58Z+FPH3hPU136d4n8F+IdI8UeH79cKxaz1nQ7y+065AVlJ8m5fAYZxlaAOsoAKACgAoAKACgAoAKACgD/MB/wCCp3gz/hAv+CjH7ZmgiLyEufj94+8WRRY2qkPxA1WTx7BsXosZh8So0SrhVjKhQFwKAPgWgD9R/wDgiv4M/wCE6/4Kf/skaQ0Xmx6Z438Q+M5SVykX/CAfD3xh43glc4ITbd6BbrGxxmdokU72SgD/AEsaACgAoAKACgAoAKACgAoA4f4hfE74b/CTw3d+Mvip4+8GfDbwlY5+2eJvHfifRfCehW7bWcJLquu3tjZLKyoxjh8/zJMYRGPFAH4d/tLf8HGX7CXwX/tDR/hJ/wAJn+0z4utfNiiTwNp0nhTwAl5FnMF9498X2trPNbscCPUfCfhXxfYyBi0czgE0Afz3/tLf8HE/7evxt/tDR/hfe+Ef2Z/CF15sMdv8OdNTXfHUllJnEWofEHxbFqE8F4mRs1LwdoXgy5UIANuXMoB+Injv4ieP/il4jvfGHxM8ceL/AIh+LdROb/xP448Sax4r8QXp3Mw+1axrt5fahOAzuVWS4ZVLNtxk7gDjqACgByqzsqIrMzMFVVBLMzHAVQMksSQAAMknAzkUAfth+xJ/wQh/bP8A2t/7I8WeMdD/AOGbPg9f+Rc/8Jt8UtJvYvFms6bLtb7R4N+GBk0/xFqvmwvFcWV/4juPCHh3ULSX7Rpmu323yXAP6/8A9if/AII//sXfsQJpfiDwZ4CX4kfF2xWKWT4y/FSOx8S+LbW+UBnuPCOnm0h8O+A0SQzJaz+GtLtte+xyfZNU1/V9plYA/UegAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/9X+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/If8Abb/4IpfsWftn/wBr+KJvCP8AwpD4yah59z/wtX4TWVho8uq6lLl/tXjjwZ5cXhfxl505EuoX8ttpfiy8VfJTxXaoAKAP4/f22/8Agib+2n+xl/a/ij/hE/8Ahefwb07z7n/hafwmsb/Vv7K02Lc32rxx4I2TeKPB/kwDztQv/J1nwlY5Ef8Awlc7nCgH5A0AFABQAUAeufB/4+/G79n3xEviz4H/ABY+IHwp8QbojPqPgTxVrHhxr+OE7kttWt9Nu4LTWbE5KyafqtveWMyM0c1vKjsjAH7yfs0/8HLf7X/wy/s/Rv2hfBXg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Uas8kkjsFSONFBZ3diFVVBZmIABJAoA/a79i/wD4IOfttftX/wBleKPGHh5f2avhNf8Ak3B8ZfFrTL628V6pp8uGNx4T+FyvZ+J9TZ4XiubO68Sy+DNA1G1k87T9ducbGAP62v2Lv+CLH7EX7Gn9k+JNO8C/8Lm+LeneTcD4qfGCCw8R6hp2oxYk+1eDvCptk8JeDjbz7306/sdLuvFNrEwguPE9/t30AfrbQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf//S/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD8r/2z/8Agjn+xJ+2oNV8QeK/h4nwx+LGoiaf/hb3wkSx8K+J7zUJMv8Aa/FmlLZz+F/G7TSiIXl34i0W48QPaxm10/xBpm7zVAP5Jf20P+CAv7af7L39reKvhppSftQfCmy8+5HiD4YaXdp8QdKsI8kS+JPhS89/r3mKivJLL4MvPG1jb26G51C609WMSAH4cXNtc2VzcWd5bz2l3aTy211a3MTwXNtcwO0U9vcQSqssM8MqtHLFIqvG6sjqGBCgEFAHu37LnxE/4VF+0t+z38VDP9mj+HHxt+Fnji4m3bVW08L+OND1m8WU9DDJa2c0c6NlJIXkRwUZhQB/rBUAfHP/AAUN8Gf8LB/YQ/bD8JJF591qf7Nvxjm02HG7zNZ0nwJres6IuME86vp1lyAWXqoLACgD/LNoA/1f/wBlfwZ/wrj9mH9nL4e+V5B8C/Aj4ReD2h27TG/hr4f+H9GdGXkhg9kd2TktknJJoA9r1PUrLRtN1DV9SnS107SrG71K/uZPuW9lY28l1dTv1+SGCJ5G46KetAH+ST8R/GV78RfiH49+IOpb/wC0fHfjTxR4yv8AzG3SfbfE+uX2t3W9udz+ffSbmzyeec0AcXQBd07TdR1i/stJ0iwvdU1TUrqCx07TdOtZ76/v726kWG2s7KztkkuLq6uJnWKC3gjeWWRlSNSzAMAfvR+xf/wb1fti/tHf2T4s+NkcP7LPwwvPIujL460yXUfivq9i+1/+JT8MYrqxu9EeRQ8Mj+PNU8K3lqWju7fRtVg+RwD+tf8AY0/4JLfsU/sRR6brHw2+GcHjD4n2SRtJ8ZPij9j8YfEBbtVw1zoE01nbaD4JJJdB/wAIZomg3Mtuwh1C71AjzGAP0soAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//9P+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/O39sf/glj+xh+3BbX1/8XPhbZ6N8RbqFo7b4x/Dk2vg74m20wj8uGbUNYtrK407xclunyW9n440jxLZWyFvskFrKRMoB/JX+2h/wbs/tb/s//wBq+Lv2fLiD9qX4a2vn3QsPDVgNE+MOj2SbpNl78P5rq5h8VNCpjtoZfA2q6zrOpzLLc/8ACJ6VBhFAPwA1nRdY8OarqGg+IdJ1PQtc0i7nsNV0bWbC60vVdMv7ZzHc2WoadexQXlld28gMc9tcwxTROpWSNWBWgD/Vt/ZZ+In/AAt39mb9nn4pmf7TJ8Rvgj8K/G9xMW3O134n8D6HrF6spOSJ4ru8minVvnSZJEfDqRQB6x4t8O2ni/wr4m8J6gAbDxP4f1nw7fAruBtNa025025BU8MPJuXyp69O9AH+Tn8Pvh9f+KfjH4I+FV3A8ep+I/iZ4a+H1zbLnzEv9X8U2XhyaBcbW3rcXDRjAU7h2NAH+tTHGkUaRRIsccaLHHGihUREG1ERRwqqoCqo4AGB0FAHx1/wUO+In/Cqf2FP2uvHaT/Zr3Rv2fPinb6PcbtnleIdd8Jan4e8NvnIPGvatp3yqQzfdQhmBoA/y6/DXhjxL4017SvCvg7w9rnivxPrt3Hp+ieHPDWk3+u69rF/NnyrLS9I0u3utQ1C7lwfLtrS3mmfB2ocHcAf0OfsX/8ABuJ+1B8bP7J8YftP63b/ALM3w9ufIuj4YkgtvE3xm1iybEnlL4dguRoPgr7TFmMz+KNUn17S5yPtngqYKyMAf1nfsgf8E0/2Ov2ILC2b4H/CbS4/GqWv2bUPiz4z8nxb8U9V8yPyrlj4qv7dToNtex4F5o/g6y8NaBcFVkfSTKC7AH3lQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH//1P7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPiT9rf/gnZ+yH+23pMtt8e/hHomseJ1tPsml/E3w8o8L/FDQlRClt9h8Z6XHHf31pZk77fQ/ES654c8z5p9Gn5FAHsH7L/AMBtN/Zg+AXwy/Z/0TxPrXjLQvhVoMnhXQPEPiOGyh1278P22p39xoVtqo06OCwlvNJ0m5s9IlurO2s7e9Nh9sjsLBZxZQAHvdAH4GeE/wDg36/Zv8J/tu2n7Xdr8TPHNx4a0j4pr8afD/wOl0nSk0nTPH0HiD/hLdNjl8ZrdNqF94N0jxMItQ0/w3Jocd89pa2ul6l4i1G1F0bsA/fOgD5o/a//AGZvD/7Yn7Pnjn9nLxd4r8R+DfCPxGuPCMXinWvCK6cPEp0Pw1408O+MLzStHudWtb/TrCfXP+Efj0ia/u9N1KO1s726cWFw5RVAOY/ZU/YN/ZR/Yt0EaP8As9/CDw34Q1Ke0S01nxzdwtr/AMRvEifK0o13xxrDXmv3FrNOpuRo1td2fh+zmd/7N0ixixHQB9fUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH//1f7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/Z";
function App() {
    var _a, _b, _c, _d;
    const [tab, setTab] = (0, React.useState)("dashboard");
    const [collegeName, setCollegeName] = (0, React.useState)(() => {
        try {
            return localStorage.getItem('tvtc_collegeName') || "";
        }
        catch (_a) {
            return "";
        }
    });
    const [adminView, setAdminView] = (0, React.useState)(false);
    const [users, setUsers] = (0, React.useState)([]);
    const ADMIN_PASS = "tvtc@admin2025";
    // Log user session on entry — stored in localStorage
    const logEntry = (college) => {
        try {
            const sessions = JSON.parse(localStorage.getItem('tvtc_sessions') || '[]');
            sessions.unshift({
                college,
                time: new Date().toISOString(),
                date: new Date().toLocaleDateString("ar-SA"),
                timeStr: new Date().toLocaleTimeString("ar-SA"),
            });
            // Keep last 200 sessions
            localStorage.setItem('tvtc_sessions', JSON.stringify(sessions.slice(0, 200)));
        }
        catch (e) { }
    };
    // Load all sessions for admin
    const loadUsers = () => {
        try {
            const sessions = JSON.parse(localStorage.getItem('tvtc_sessions') || '[]');
            setUsers(sessions);
        }
        catch (e) {
            setUsers([]);
        }
    };
    const [courses, setCourses] = (0, React.useState)(ALL_COURSES);
    const [trainers, setTrainers] = (0, React.useState)(INIT_TRAINERS);
    const [halls, setHalls] = (0, React.useState)(INIT_HALLS);
    const [trainees, setTrainees] = (0, React.useState)([]);
    // scheds: { spec: { level: { groupId: cells[] } } }
    const [scheds, setScheds] = (0, React.useState)({ net: {}, auto: {}, gen: {} });
    // groups: { spec: { level: [{id, name}] } }
    const [groups, setGroups] = (0, React.useState)({ net: {}, auto: {}, gen: {} });
    const [selSpec, setSelSpec] = (0, React.useState)("net");
    const [selLv, setSelLv] = (0, React.useState)(1);
    const [selGroup, setSelGroup] = (0, React.useState)(null); // active group id
    const [viewSpec, setViewSpec] = (0, React.useState)("net");
    const [viewMode, setViewMode] = (0, React.useState)("trainees");
    const [modal, setModal] = (0, React.useState)(null);
    const [importTxt, setImportTxt] = (0, React.useState)("");
    const [periods, setPeriods] = (0, React.useState)(DEFAULT_PERIOD_CONFIG);
    const [courseAssign, setCourseAssign] = (0, React.useState)({});
    const [warn, setWarn] = (0, React.useState)(() => { return null; });
    const [quotaCounts, setQuotaCounts] = (0, React.useState)(() => {
        try {
            const s = localStorage.getItem('tvtc_quotaCounts');
            return s ? JSON.parse(s) : {};
        }
        catch (_a) {
            return {};
        }
    });
    const [theoryCap, setTheoryCap] = (0, React.useState)(() => {
        try {
            return +localStorage.getItem('tvtc_theoryCap') || 35;
        }
        catch (_a) {
            return 35;
        }
    });
    const [practCap, setPractCap] = (0, React.useState)(() => {
        try {
            return +localStorage.getItem('tvtc_practCap') || 20;
        }
        catch (_a) {
            return 20;
        }
    });
    // ── Auto-save to localStorage whenever key state changes ──
    const { useEffect } = React;
    useEffect(() => {
        try {
            localStorage.setItem('tvtc_collegeName', collegeName);
            const data = {
                courses, trainers, halls, trainees,
                scheds, groups, courseAssign, periods,
                quotaCounts, theoryCap, practCap,
                collegeName, savedAt: new Date().toISOString()
            };
            localStorage.setItem('tvtc_autosave', JSON.stringify(data));
        }
        catch (e) { }
    }, [courses, trainers, halls, scheds, groups, courseAssign,
        periods, quotaCounts, theoryCap, practCap, collegeName]);
    // ── Auto-load on first render if no data entered yet ──────
    useEffect(() => {
        try {
            const saved = localStorage.getItem('tvtc_autosave');
            if (!saved)
                return;
            const data = JSON.parse(saved);
            if (data.courses)
                setCourses(data.courses);
            if (data.trainers)
                setTrainers(data.trainers);
            if (data.halls)
                setHalls(data.halls);
            if (data.trainees)
                setTrainees(data.trainees);
            if (data.scheds)
                setScheds(data.scheds);
            if (data.groups)
                setGroups(data.groups);
            if (data.courseAssign)
                setCourseAssign(data.courseAssign);
            if (data.periods)
                setPeriods(data.periods);
            if (data.quotaCounts)
                setQuotaCounts(data.quotaCounts);
            if (data.theoryCap)
                setTheoryCap(data.theoryCap);
            if (data.practCap)
                setPractCap(data.practCap);
            if (data.collegeName)
                setCollegeName(data.collegeName);
        }
        catch (e) { }
    }, []);
    const spColor = id => { var _a; return ((_a = SPECIALIZATIONS.find(s => s.id === id)) === null || _a === void 0 ? void 0 : _a.color) || "#00695C"; };
    const spName = id => { var _a; return ((_a = SPECIALIZATIONS.find(s => s.id === id)) === null || _a === void 0 ? void 0 : _a.name) || id; };
    // ── Group helpers ─────────────────────────────────────────
    const getGroups = (sp, lv) => (groups[sp] && groups[sp][lv]) || [];
    const ensureGroup = (sp, lv) => {
        // If no groups exist for this spec/level, auto-create "رزمة 1"
        const existing = (groups[sp] && groups[sp][lv]) || [];
        if (existing.length === 0) {
            const g = { id: uid(), name: "رزمة 1" };
            setGroups(p => (Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: [g] }) })));
            setSelGroup(g.id);
            return g.id;
        }
        return existing[0].id;
    };
    const addGroup = (sp, lv, name) => {
        const g = { id: uid(), name };
        setGroups(p => (Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: [...(p[sp] && p[sp][lv] || []), g] }) })));
        setSelGroup(g.id);
    };
    const removeGroup = (sp, lv, gid) => {
        setGroups(p => (Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: (p[sp] && p[sp][lv] || []).filter(g => g.id !== gid) }) })));
        setScheds(p => (Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: Object.fromEntries(Object.entries((p[sp] && p[sp][lv]) || {}).filter(([k]) => k !== gid)) }) })));
        const remaining = (groups[sp] && groups[sp][lv] || []).filter(g => g.id !== gid);
        setSelGroup(remaining.length > 0 ? remaining[0].id : null);
    };
    const renameGroup = (sp, lv, gid, name) => {
        setGroups(p => (Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: (p[sp] && p[sp][lv] || []).map(g => g.id === gid ? Object.assign(Object.assign({}, g), { name }) : g) }) })));
    };
    // ── Schedule helpers ──────────────────────────────────────
    const getSched = (sp, lv, gid) => (scheds[sp] && scheds[sp][lv] && scheds[sp][lv][gid]) || [];
    const setSched = (sp, lv, gid, fn) => setScheds(p => {
        const cur = (p[sp] && p[sp][lv] && p[sp][lv][gid]) || [];
        return Object.assign(Object.assign({}, p), { [sp]: Object.assign(Object.assign({}, p[sp]), { [lv]: Object.assign(Object.assign({}, ((p[sp] && p[sp][lv]) || {})), { [gid]: typeof fn === "function" ? fn(cur) : fn }) }) });
    });
    // Active group for current spec/level (auto-ensure)
    const activeGroup = () => {
        const gs = getGroups(selSpec, selLv);
        if (gs.length === 0)
            return null;
        if (selGroup && gs.find(g => g.id === selGroup))
            return selGroup;
        return gs[0].id;
    };
    const ag = activeGroup();
    const lc = (sp, lv) => [
        ...courses.filter(c => c.spec === sp && c.level === lv && !c.coop),
        ...(sp !== "gen" ? courses.filter(c => c.spec === "gen" && c.level === lv) : []),
    ];
    // Used hours per trainer
    // Used hours per trainer — shared copies NOT counted (only source cells counted)
    const usedH = tid => Object.values(scheds).reduce((a, ls) => a + Object.values(ls).reduce((b, lvGroups) => b + Object.values(lvGroups).reduce((c, cells) => c + cells
        .filter(x => !x.isSharedCopy && (x.theoryTrainerId === tid || x.practicalTrainerId === tid))
        .reduce((s, x) => s + (x.sessionHours || 1), 0), 0), 0), 0);
    // ── All cells across every spec/level/group ───────────────
    const getAllCells = () => Object.entries(scheds).flatMap(([sp, ls]) => Object.entries(ls || {}).flatMap(([lv, lvGroups]) => Object.entries(lvGroups || {}).flatMap(([gid, cells]) => cells.map(c => (Object.assign(Object.assign({}, c), { spec: sp, level: +lv, gid }))))));
    // Returns list of group labels sharing the same courseId at the same day+period (excluding current cell)
    const getSharedWith = (cell, currentSpec, currentLv, currentGid) => {
        const all = getAllCells();
        return all
            .filter(x => x.courseId === cell.courseId &&
            x.day === cell.day &&
            x.period === cell.period &&
            !(x.spec === currentSpec && x.level === currentLv && x.gid === currentGid))
            .map(x => {
            const sp = SPECIALIZATIONS.find(s => s.id === x.spec);
            const grps = (groups[x.spec] && groups[x.spec][x.level]) || [];
            const grp = grps.find(g => g.id === x.gid);
            return `${(sp === null || sp === void 0 ? void 0 : sp.name) || x.spec} م${x.level} ${(grp === null || grp === void 0 ? void 0 : grp.name) || ""}`;
        });
    };
    // Returns ALL groups (across all specs) that have this courseId in their schedule
    const getAllGroupsForCourse = (courseId, currentSpec, currentLv, currentGid) => {
        const all = getAllCells();
        const seen = new Set();
        return all
            .filter(x => x.courseId === courseId &&
            !(x.spec === currentSpec && x.level === currentLv && x.gid === currentGid))
            .map(x => {
            const key = `${x.spec}-${x.level}-${x.gid}`;
            if (seen.has(key))
                return null;
            seen.add(key);
            const sp = SPECIALIZATIONS.find(s => s.id === x.spec);
            const grps = (groups[x.spec] && groups[x.spec][x.level]) || [];
            const grp = grps.find(g => g.id === x.gid);
            const sessions = (scheds[x.spec] && scheds[x.spec][x.level] && scheds[x.spec][x.level][x.gid]) || [];
            const courseSessions = sessions.filter(s => s.courseId === courseId).length;
            return { label: `${(sp === null || sp === void 0 ? void 0 : sp.name) || x.spec} — م${x.level} — ${(grp === null || grp === void 0 ? void 0 : grp.name) || ""}`, count: courseSessions, key };
        }).filter(Boolean);
    };
    // Build available groups list for sharing (excluding current)
    const allAvailGroups = (cell, currentSpec, currentLv, currentGid) => Object.entries(groups).flatMap(([sp, levels]) => Object.entries(levels || {}).flatMap(([lv2, gs]) => (gs || []).map(g => {
        const key = `${sp}-${lv2}-${g.id}`;
        const existing = (scheds[sp] && scheds[sp][+lv2] && scheds[sp][+lv2][g.id] || [])
            .find(s => s.courseId === cell.courseId && s.day === cell.day && s.period === cell.period);
        return {
            sp, lv: +lv2, gid: g.id, name: g.name,
            label: `${spName(sp)} — الفصل ${lv2} — ${g.name}`,
            key, exists: !!existing
        };
    }))).filter(g => !(g.sp === currentSpec && g.lv === currentLv && g.gid === currentGid));
    // Copy a cell to selected groups (shared copy — not counted in trainer hours)
    const addSharedCopies = (cell, fromSpec, fromLv, fromGid, keys) => {
        const course = courses.find(c => c.id === cell.courseId);
        const hasBoth = course && course.L > 0 && course.P > 0;
        // Tag source cell
        setSched(fromSpec, fromLv, fromGid, p => p.map(s => s.id === cell.id
            ? Object.assign(Object.assign({}, s), { sourceId: cell.id, sharedGroupKeys: [], showSharing: false }) : s));
        let addedCount = 0;
        const warnings = [];
        keys.forEach(key => {
            const [sp, lv, gid] = key.split('-');
            const grps = (groups[sp] && groups[sp][+lv]) || [];
            const grp = grps.find(g => g.id === gid);
            const label = (grp === null || grp === void 0 ? void 0 : grp.name) || gid;
            const targetSched = getSched(sp, +lv, gid);
            // ── Check slot not occupied ──
            if (targetSched.find(s => s.day === cell.day && s.period === cell.period)) {
                warnings.push(`❌ ${label}: الخانة مشغولة بمقرر آخر — تم التخطي`);
                return;
            }
            // ── Check trainer/hall warnings — pass family sourceId to exclude siblings ──
            const famId = cell.sourceId || cell.id;
            const tConflict = checkTrainerConflict(cell.theoryTrainerId, cell.day, cell.period, null, famId)
                || checkTrainerConflict(cell.practicalTrainerId, cell.day, cell.period, null, famId);
            const hConflict = checkHallConflict(cell.hallId, cell.day, cell.period, null, famId);
            if (tConflict)
                warnings.push(`⚠️ ${label}: ${tConflict}`);
            if (hConflict)
                warnings.push(`⚠️ ${label}: ${hConflict}`);
            const baseCell = Object.assign(Object.assign({}, cell), { isSharedCopy: true, sourceId: cell.id, showSharing: false, sharedGroupKeys: [] });
            if (hasBoth) {
                setSched(sp, +lv, gid, p => [...p, Object.assign(Object.assign({}, baseCell), { id: uid(), sessionType: "theory", sessionHours: course.L + course.T, practicalTrainerId: null })]);
                setSched(sp, +lv, gid, p => [...p, Object.assign(Object.assign({}, baseCell), { id: uid(), sessionType: "practical", sessionHours: course.P, theoryTrainerId: null })]);
            }
            else {
                setSched(sp, +lv, gid, p => [...p, Object.assign(Object.assign({}, baseCell), { id: uid() })]);
            }
            addedCount++;
        });
        if (warnings.length > 0) {
            setWarn(warnings.join('\n'));
            setTimeout(() => setWarn(null), 7000);
        }
        if (addedCount > 0) {
            // Show success briefly
            setTimeout(() => {
                setWarn(`✅ تم نسخ المقرر لـ ${addedCount} رزمة`);
                setTimeout(() => setWarn(null), 3000);
            }, warnings.length > 0 ? 7500 : 0);
        }
    };
    // فحص تعارض المدرب — يستثني عائلة المشاركة كاملاً
    const checkTrainerConflict = (trainerId, day, period, excludeId = null, familySourceId = null) => {
        var _a, _b, _c;
        if (!trainerId)
            return null;
        const all = getAllCells();
        const currentCell = excludeId ? all.find(c => c.id === excludeId) : null;
        // حدد معرف العائلة: من المعامل المباشر أو من الخلية الحالية
        const famId = familySourceId
            || (currentCell === null || currentCell === void 0 ? void 0 : currentCell.sourceId)
            || (!(currentCell === null || currentCell === void 0 ? void 0 : currentCell.isSharedCopy) ? currentCell === null || currentCell === void 0 ? void 0 : currentCell.id : null);
        const conflict = all.find(c => {
            if (c.id === excludeId)
                return false;
            if (c.day !== day || c.period !== period)
                return false;
            if (c.theoryTrainerId !== trainerId && c.practicalTrainerId !== trainerId)
                return false;
            // تجاهل نفس العائلة (أصل + نسخ)
            if (famId) {
                const cFam = c.sourceId || (!c.isSharedCopy ? c.id : null);
                if (cFam && cFam === famId)
                    return false;
                if (c.id === famId)
                    return false;
            }
            return true;
        });
        if (!conflict)
            return null;
        const trName = ((_a = trainers.find(t => t.id === trainerId)) === null || _a === void 0 ? void 0 : _a.name) || "";
        const crsName = ((_b = courses.find(x => x.id === conflict.courseId)) === null || _b === void 0 ? void 0 : _b.code) || "";
        const grpName = ((_c = Object.values(groups).flatMap(ls => Object.values(ls || {})).flat()
            .find(g => g.id === conflict.gid)) === null || _c === void 0 ? void 0 : _c.name) || "";
        return `المدرب "${trName}" لديه حصة (${crsName}) في نفس الوقت${grpName ? " — " + grpName : ""}`;
    };
    const checkHallConflict = (hallId, day, period, excludeId = null, familySourceId = null) => {
        var _a, _b, _c;
        if (!hallId)
            return null;
        const all = getAllCells();
        const currentCell = excludeId ? all.find(c => c.id === excludeId) : null;
        const famId = familySourceId
            || (currentCell === null || currentCell === void 0 ? void 0 : currentCell.sourceId)
            || (!(currentCell === null || currentCell === void 0 ? void 0 : currentCell.isSharedCopy) ? currentCell === null || currentCell === void 0 ? void 0 : currentCell.id : null);
        const conflict = all.find(c => {
            if (c.id === excludeId)
                return false;
            if (c.day !== day || c.period !== period)
                return false;
            if (c.hallId !== hallId)
                return false;
            if (famId) {
                const cFam = c.sourceId || (!c.isSharedCopy ? c.id : null);
                if (cFam && cFam === famId)
                    return false;
                if (c.id === famId)
                    return false;
            }
            return true;
        });
        if (!conflict)
            return null;
        const hallName = ((_a = halls.find(h => h.id === hallId)) === null || _a === void 0 ? void 0 : _a.name) || "";
        const crsName = ((_b = courses.find(x => x.id === conflict.courseId)) === null || _b === void 0 ? void 0 : _b.code) || "";
        const grpName = ((_c = Object.values(groups).flatMap(ls => Object.values(ls || {})).flat()
            .find(g => g.id === conflict.gid)) === null || _c === void 0 ? void 0 : _c.name) || "";
        return `القاعة "${hallName}" محجوزة (${crsName}) في نفس الوقت${grpName ? " — " + grpName : ""}`;
    };
    // Drop handler with ALL validations
    const handleDrop = (0, React.useCallback)((e, day, period, spec, lv, gid) => {
        e.preventDefault();
        const cid = e.dataTransfer.getData("courseId");
        const mv = e.dataTransfer.getData("moveCell");
        const sched = getSched(spec, lv, gid);
        if (mv) {
            const o = JSON.parse(mv);
            // Validate trainer/hall on move
            const cell = getAllCells().find(c => c.id === o.id);
            if (cell) {
                const tConflict = checkTrainerConflict(cell.theoryTrainerId, day, period, o.id)
                    || checkTrainerConflict(cell.practicalTrainerId, day, period, o.id);
                const hConflict = checkHallConflict(cell.hallId, day, period, o.id);
                if (tConflict || hConflict) {
                    setWarn("⚠️ تعارض عند النقل: " + (tConflict || hConflict));
                    setTimeout(() => setWarn(null), 5000);
                    return;
                }
            }
            setSched(spec, lv, gid, p => p.map(s => s.id === o.id ? Object.assign(Object.assign({}, s), { day, period }) : s));
        }
        else if (cid) {
            // ── منع التكرار: خلية موجودة بنفس اليوم والحصة ──
            if (sched.find(s => s.day === day && s.period === period)) {
                setWarn("⚠️ لا يمكن وضع مقررين في نفس الوقت — هذه الخانة مشغولة");
                setTimeout(() => setWarn(null), 5000);
                return;
            }
            const course = courses.find(c => c.id === cid);
            // 1) Consecutive theory check
            if (course && isPurelyTheory(course)) {
                if (wouldExceedConsecutiveTheory(sched, courses, day, period)) {
                    setWarn("⚠️ لا يمكن وضع 4 حصص نظرية متتالية. الحد الأقصى 3 حصص نظرية متتالية.");
                    setTimeout(() => setWarn(null), 5000);
                    return;
                }
            }
            // 2) Pre-assigned trainer conflict check
            // Check off-days for pre-assigned trainers
            const assign = courseAssign[cid] || {};
            const checkOffDay = (tid, day, period) => {
                if (!tid)
                    return null;
                const tr = trainers.find(t => t.id === tid);
                if (!tr)
                    return null;
                if ((tr.offDays || []).includes(day))
                    return `المدرب "${tr.name}" مفرّغ يوم ${day} بالكامل`;
                const slot = (tr.offSlots || []).find(s => s.day === day);
                if (slot && slot.periods.includes(period))
                    return `المدرب "${tr.name}" مفرّغ في الحصة ${period} يوم ${day}`;
                return null;
            };
            const offWarn = checkOffDay(assign.theoryId, day, period)
                || checkOffDay(assign.practicalId, day, period);
            if (offWarn) {
                setWarn("🏖️ " + offWarn);
                setTimeout(() => setWarn(null), 5000);
                // Still allow placing — just warn
            }
            const tConflict = checkTrainerConflict(assign.theoryId, day, period)
                || checkTrainerConflict(assign.practicalId, day, period);
            if (tConflict) {
                setWarn("⚠️ تعارض مدرب: " + tConflict);
                setTimeout(() => setWarn(null), 5000);
                return;
            }
            const defaultType = (course === null || course === void 0 ? void 0 : course.P) > 0 && (course === null || course === void 0 ? void 0 : course.L) > 0 ? "theory" : ((course === null || course === void 0 ? void 0 : course.P) > 0 ? "practical" : "theory");
            const newCell = {
                id: uid(), courseId: cid, day, period,
                theoryTrainerId: assign.theoryId || null,
                practicalTrainerId: assign.practicalId || null,
                hallId: null,
                sessionType: defaultType,
                sessionHours: 1,
                isSharedSource: false,
                sharedGroupKeys: [],
            };
            setSched(spec, lv, gid, p => [...p, newCell]);
        }
    }, [scheds, courses, courseAssign, trainers, halls, groups]);
    const handleCellUpdate = (spec, lv, gid, cellId, upd) => {
        var _a, _b, _c;
        const cell = getSched(spec, lv, gid).find(s => s.id === cellId);
        if (!cell)
            return;
        // Check if new sessionHours would exceed theory or practical limit independently
        if (upd.sessionHours !== undefined || upd.sessionType !== undefined) {
            const course = courses.find(c => c.id === cell.courseId);
            if (course) {
                const newSessionH = (_a = upd.sessionHours) !== null && _a !== void 0 ? _a : (cell.sessionHours || 1);
                const newType = (_c = (_b = upd.sessionType) !== null && _b !== void 0 ? _b : cell.sessionType) !== null && _c !== void 0 ? _c : (course.P === 0 ? "theory" : "practical");
                const theoryNeeded = course.L + course.T;
                const practNeeded = course.P;
                const otherSessions = getSched(spec, lv, gid).filter(s => s.courseId === cell.courseId && s.id !== cellId);
                const otherTh = otherSessions.filter(s => {
                    const st = s.sessionType || (course.P === 0 ? "theory" : "practical");
                    return st === "theory" || course.P === 0;
                }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                const otherPr = otherSessions.filter(s => {
                    const st = s.sessionType || (course.L === 0 && course.T === 0 ? "practical" : "theory");
                    return st === "practical" || (course.L === 0 && course.T === 0);
                }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                const isTheorySession = newType === "theory" || (course.P === 0);
                const isPractSession = newType === "practical" || (course.L === 0 && course.T === 0);
                if (isTheorySession && theoryNeeded > 0 && otherTh + newSessionH > theoryNeeded) {
                    setWarn(`⚠️ تجاوز النظري: "${course.name}" — النظري المتاح ${theoryNeeded}س، الموزع سيصبح ${otherTh + newSessionH}س`);
                    setTimeout(() => setWarn(null), 5000);
                }
                else if (isPractSession && practNeeded > 0 && otherPr + newSessionH > practNeeded) {
                    setWarn(`⚠️ تجاوز العملي: "${course.name}" — العملي المتاح ${practNeeded}س، الموزع سيصبح ${otherPr + newSessionH}س`);
                    setTimeout(() => setWarn(null), 5000);
                }
            }
        }
        // Trainer off-day check
        if (upd.theoryTrainerId !== undefined || upd.practicalTrainerId !== undefined) {
            const checkOff = (tid) => {
                if (!tid)
                    return null;
                const tr = trainers.find(t => t.id === tid);
                if (!tr)
                    return null;
                if ((tr.offDays || []).includes(cell.day))
                    return `🏖️ المدرب "${tr.name}" مفرّغ يوم ${cell.day} بالكامل`;
                const slot = (tr.offSlots || []).find(s => s.day === cell.day);
                if (slot && slot.periods.includes(cell.period))
                    return `🏖️ المدرب "${tr.name}" مفرّغ في هذه الحصة يوم ${cell.day}`;
                return null;
            };
            const ow = checkOff(upd.theoryTrainerId) || checkOff(upd.practicalTrainerId);
            if (ow) {
                setWarn(ow);
                setTimeout(() => setWarn(null), 5000);
            }
        }
        // Trainer conflict
        if (upd.theoryTrainerId !== undefined) {
            const c = checkTrainerConflict(upd.theoryTrainerId, cell.day, cell.period, cellId);
            if (c) {
                setWarn("⚠️ تعارض مدرب نظري: " + c);
                setTimeout(() => setWarn(null), 5000);
                return;
            }
        }
        if (upd.practicalTrainerId !== undefined) {
            const c = checkTrainerConflict(upd.practicalTrainerId, cell.day, cell.period, cellId);
            if (c) {
                setWarn("⚠️ تعارض مدرب عملي: " + c);
                setTimeout(() => setWarn(null), 5000);
                return;
            }
        }
        // Hall conflict
        if (upd.hallId !== undefined) {
            const c = checkHallConflict(upd.hallId, cell.day, cell.period, cellId);
            if (c) {
                setWarn("⚠️ تعارض قاعة: " + c);
                setTimeout(() => setWarn(null), 5000);
                return;
            }
        }
        setSched(spec, lv, gid, p => p.map(s => s.id === cellId ? Object.assign(Object.assign({}, s), upd) : s));
        // ── Sync shared copies ────────────────────────────────────
        // If this is a source cell and the update affects trainer/hall/refNumber,
        // propagate those changes to all shared copies (isSharedCopy=true, sourceId===cellId)
        const syncFields = ['theoryTrainerId', 'practicalTrainerId', 'hallId', 'refNumber'];
        const hasSyncField = syncFields.some(f => upd[f] !== undefined);
        if (hasSyncField && !cell.isSharedCopy) {
            const syncUpd = Object.fromEntries(syncFields.filter(f => upd[f] !== undefined).map(f => [f, upd[f]]));
            // Find all copies across all scheds
            setScheds(prev => {
                const next = JSON.parse(JSON.stringify(prev));
                Object.entries(next).forEach(([sp, ls]) => Object.entries(ls || {}).forEach(([lv2, lvGroups]) => Object.entries(lvGroups || {}).forEach(([gid2, cells]) => {
                    cells.forEach((c, i) => {
                        if (c.isSharedCopy && c.sourceId === cellId) {
                            next[sp][lv2][gid2][i] = Object.assign(Object.assign({}, c), syncUpd);
                        }
                    });
                })));
                return next;
            });
        }
    };
    const TABS = [
        { id: "dashboard", l: "لوحة التحكم", i: "📊" },
        { id: "courses", l: "المقررات", i: "📚" },
        { id: "trainers", l: "المدربون", i: "👨‍🏫" },
        { id: "halls", l: "القاعات", i: "🏛" },
        { id: "trainees", l: "المتدربون", i: "👥" },
        { id: "schedule", l: "إعداد الجداول", i: "📅" },
        { id: "view", l: "عرض الجداول", i: "🗓" },
        { id: "stats", l: "الإحصائيات", i: "📈" },
        { id: "quota", l: "النصاب التدريبي", i: "📋" },
    ];
    // ── Period display helper ─────────────────────────────────
    const PeriodLabel = ({ pid }) => {
        const p = periods.find(x => x.id === pid);
        if (!p)
            return null;
        return (React.createElement("div", { style: { textAlign: "center" } },
            React.createElement("div", { style: { fontWeight: 700, fontSize: 11 } },
                "\u0627\u0644\u062D\u0635\u0629 ",
                p.label),
            React.createElement("div", { style: { fontSize: 9, color: "#00695C", direction: "ltr" } },
                p.start,
                "\u2013",
                p.end)));
    };
    // ── Periods sidebar in grid ───────────────────────────────
    const PeriodSidebar = ({ pid }) => {
        const p = periods.find(x => x.id === pid);
        if (!p)
            return null;
        return (React.createElement("td", { style: { background: "#F5F5F5", padding: "4px 6px", border: "1px solid #1e2d45",
                verticalAlign: "top", minWidth: 88 } },
            React.createElement("div", { style: { textAlign: "center" } },
                React.createElement("div", { style: { color: "#0ea5e9", fontWeight: 700, fontSize: 11 } }, p.label),
                React.createElement("div", { style: { color: "#00695C", fontSize: 9, direction: "ltr" } }, p.start),
                React.createElement("div", { style: { color: "#00695C", fontSize: 9, direction: "ltr" } }, p.end))));
    };
    // ── Break Row ─────────────────────────────────────────────
    const BreakRow = ({ breakInfo }) => (React.createElement("tr", null,
        React.createElement("td", { colSpan: 6, style: { background: "#F0FDF4", border: "1px solid #1e2d45", padding: "4px 12px" } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                React.createElement("span", { style: { color: "#10b981", fontSize: 10 } },
                    "\uD83D\uDD4C ",
                    breakInfo.label),
                React.createElement("span", { style: { color: "#065F46", fontSize: 10, direction: "ltr" } },
                    breakInfo.from,
                    " \u2014 ",
                    breakInfo.to),
                React.createElement("span", { style: { color: "#065F46", fontSize: 10 } },
                    "(",
                    breakInfo.dur,
                    " \u062F\u0642\u064A\u0642\u0629)")))));
    // ── DASHBOARD ─────────────────────────────────────────────
    const Dashboard = () => {
        const [showEnrollImport, setShowEnrollImport] = (0, React.useState)(false);
        const [showPlanImport, setShowPlanImport] = (0, React.useState)(false);
        const [showLimits, setShowLimits] = (0, React.useState)(false);
        const [localTheory, setLocalTheory] = (0, React.useState)(theoryCap);
        const [localPract, setLocalPract] = (0, React.useState)(practCap);
        // Parse pasted enrolment data and fill quotaCounts
        const importEnrolment = (text, codeCol, countCol, sep) => {
            const lines2 = text.split("\n").filter(l => l.trim());
            let matched = 0;
            const notFound = [];
            const newCounts = Object.assign({}, quotaCounts);
            lines2.forEach(line => {
                const cols = line.split(sep === "tab" ? "\t" : sep).map(c => c.trim().replace(/\r/, ""));
                const rawCode = (cols[+codeCol] || "").replace(/\s/g, "").toLowerCase();
                const rawCount = (cols[+countCol] || "").replace(/[^\d]/g, "");
                const count = parseInt(rawCount) || 0;
                if (!rawCode || !count)
                    return;
                const mc = courses.find(c => c.code.replace(/\s/g, "").toLowerCase() === rawCode ||
                    c.code.replace(/\s/g, "").toLowerCase().includes(rawCode) ||
                    rawCode.includes(c.code.replace(/\s/g, "").toLowerCase()));
                if (mc) {
                    newCounts[mc.id] = count;
                    matched++;
                }
                else
                    notFound.push(cols[+codeCol] || rawCode);
            });
            setQuotaCounts(newCounts);
            setTab("quota");
            alert(`✅ تم استيراد ${matched} مقرر\n${notFound.length > 0 ? "⚠️ لم يُعثر على:\n" + notFound.slice(0, 8).join(", ") : ""}`);
        };
        const totalCoursesWithCount = Object.values(quotaCounts).filter(v => v > 0).length;
        const totalEnrolled = Object.values(quotaCounts).reduce((a, v) => a + v, 0);
        return (React.createElement("div", null,
            React.createElement("h2", { style: { color: "#1A1A2E", fontSize: 19, marginBottom: 20 } }, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"),
            React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid #3949AB", borderRadius: 20, boxShadow: "0 4px 20px rgba(57,73,171,0.15)", padding: 16, marginBottom: 16 } },
                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 12 } },
                    React.createElement("img", { src: LOGO_B64, alt: "TVTC", style: { height: 44, width: "auto", objectFit: "contain", flexShrink: 0 } }),
                    React.createElement("div", null,
                        React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14 } }, "\u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u062A\u0642\u0646\u064A \u0648\u0627\u0644\u0645\u0647\u0646\u064A"),
                        React.createElement("div", { style: { color: "#00695C", fontSize: 11 } }, "\u0646\u0638\u0627\u0645 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629"))),
                React.createElement("div", { style: { marginBottom: 10 } },
                    React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 6 } }, "\uD83C\uDFEB \u0627\u0633\u0645 \u0627\u0644\u0643\u0644\u064A\u0629"),
                    React.createElement("div", { style: { display: "flex", gap: 8 } },
                        React.createElement("input", { value: collegeName, onChange: e => {
                                const val = e.target.value;
                                setCollegeName(val);
                                try {
                                    localStorage.setItem('tvtc_collegeName', val);
                                }
                                catch (_a) { }
                                // Log first entry
                                if (val.trim() && !collegeName.trim())
                                    logEntry(val.trim());
                            }, placeholder: "\u0627\u0644\u0643\u0644\u064A\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0628\u0627\u0644\u0628\u062F\u0627\u0626\u0639", style: { flex: 1, border: `2px solid ${collegeName ? "#283593" : "#C5CAE9"}`,
                                borderRadius: 16, padding: "10px 14px", fontSize: 14, color: "#1A1A2E",
                                background: collegeName ? "#F0FDF4" : "#F5F5F5", fontWeight: 600,
                                direction: "rtl", outline: "none" } }),
                        collegeName && (React.createElement("div", { style: { background: "linear-gradient(135deg,#00897B,#00695C)", color: "#fff", borderRadius: 16,
                                padding: "10px 14px", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center" } }, "\u2705 \u0645\u062D\u0641\u0648\u0638")))),
                React.createElement("button", { onClick: () => {
                        const p = prompt("كلمة مرور المشرف:");
                        if (p === ADMIN_PASS) {
                            loadUsers();
                            setAdminView(true);
                        }
                        else if (p !== null)
                            alert("كلمة المرور غير صحيحة");
                    }, style: { background: "transparent", border: "1px solid #0E749044", color: "#283593",
                        borderRadius: 12, padding: "6px 14px", cursor: "pointer", fontSize: 11, fontWeight: 700 } }, "\uD83D\uDD10 \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0634\u0631\u0641")),
            adminView && (React.createElement("div", { style: { background: "#1A237E", borderRadius: 20, padding: 16, marginBottom: 16 } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 } },
                    React.createElement("h3", { style: { color: "#FFFFFF", margin: 0, fontSize: 15, fontWeight: 800 } }, "\uD83D\uDD10 \u0644\u0648\u062D\u0629 \u0627\u0644\u0645\u0634\u0631\u0641"),
                    React.createElement("button", { onClick: () => setAdminView(false), style: { background: "#ffffff22", border: "none", color: "#C5CAE9",
                            borderRadius: 12, padding: "6px 12px", cursor: "pointer", fontSize: 12 } }, "\u2715 \u0625\u063A\u0644\u0627\u0642")),
                React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 } },
                    React.createElement("div", { style: { background: "#ffffff15", borderRadius: 16, padding: 12, textAlign: "center" } },
                        React.createElement("div", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062C\u0644\u0633\u0627\u062A"),
                        React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 900, fontSize: 28 } }, users.length)),
                    React.createElement("div", { style: { background: "#ffffff15", borderRadius: 16, padding: 12, textAlign: "center" } },
                        React.createElement("div", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u0643\u0644\u064A\u0627\u062A \u0645\u062E\u062A\u0644\u0641\u0629"),
                        React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 900, fontSize: 28 } }, new Set(users.map(u => u.college)).size))),
                React.createElement("div", { style: { maxHeight: 300, overflowY: "auto", marginBottom: 12 } }, users.length === 0 ? (React.createElement("div", { style: { color: "#7DD3FC", fontSize: 12, textAlign: "center", padding: 16 } }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A \u0645\u0633\u062C\u0644\u0629")) : users.slice(0, 50).map((u, i) => (React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "8px 12px", marginBottom: 5, background: "#ffffff10", borderRadius: 12,
                        borderRight: "3px solid #0E7490" } },
                    React.createElement("div", null,
                        React.createElement("div", { style: { color: "#FFFFFF", fontSize: 12, fontWeight: 600 } }, u.college),
                        React.createElement("div", { style: { color: "#7DD3FC", fontSize: 10 } },
                            u.date,
                            " \u2014 ",
                            u.timeStr)),
                    React.createElement("span", { style: { color: "#C5CAE9", fontSize: 10 } },
                        "#",
                        i + 1))))),
                React.createElement("button", { onClick: () => {
                        if (window.confirm("هل تريد حذف جميع السجلات؟")) {
                            localStorage.removeItem('tvtc_sessions');
                            setUsers([]);
                        }
                    }, style: { width: "100%", padding: 10, background: "#EF444422", color: "#FCA5A5",
                        border: "1px solid #EF444444", borderRadius: 12, cursor: "pointer", fontSize: 12, fontWeight: 700 } }, "\uD83D\uDDD1\uFE0F \u062D\u0630\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u062C\u0644\u0627\u062A"))),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12, marginBottom: 20 } }, [
                { l: "مقررات الشبكات", v: courses.filter(c => c.spec === "net").length, i: "🌐", c: "#0ea5e9", s: courses.filter(c => c.spec === "net").reduce((a, c) => a + c.CTH, 0) + "س" },
                { l: "مقررات المركبات", v: courses.filter(c => c.spec === "auto").length, i: "🔧", c: "#f97316", s: courses.filter(c => c.spec === "auto").reduce((a, c) => a + c.CTH, 0) + "س" },
                { l: "مقررات مشتركة", v: courses.filter(c => c.spec === "gen").length, i: "📖", c: "#8b5cf6", s: courses.filter(c => c.spec === "gen").reduce((a, c) => a + c.CTH, 0) + "س" },
                { l: "المدربون", v: trainers.length, i: "👨‍🏫", c: "#10b981", s: "الحد الأقصى " + Math.max(...trainers.map(t => t.maxH), 0) + "س" },
            ].map(s => (React.createElement("div", { key: s.l, style: { background: "#FFFFFF", border: `1px solid ${s.c}33`, borderRadius: 20, padding: "14px 16px" } },
                React.createElement("div", { style: { fontSize: 22, marginBottom: 4 } }, s.i),
                React.createElement("div", { style: { color: s.c, fontSize: 24, fontWeight: 800 } }, s.v),
                React.createElement("div", { style: { color: "#1A237E", fontSize: 11, fontWeight: 600 } }, s.l),
                React.createElement("div", { style: { color: "#00695C", fontSize: 10, marginTop: 2 } }, s.s))))),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: 12, marginBottom: 20 } },
                React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid #3949AB", borderRadius: 20, boxShadow: "0 4px 20px rgba(57,73,171,0.15)", padding: 16 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                            React.createElement("div", { style: { width: 40, height: 40, background: "#E8EAF6", borderRadius: 16,
                                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } }, "\uD83D\uDCE5"),
                            React.createElement("div", null,
                                React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14 } }, "\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629"),
                                React.createElement("div", { style: { color: "#00695C", fontSize: 11 } }, "\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A \u0645\u0646 \u0645\u0644\u0641 Excel"))),
                        React.createElement("button", { onClick: () => setShowPlanImport(p => !p), style: { padding: "7px 14px", borderRadius: 14, border: "1px solid #0E7490",
                                background: showPlanImport ? "#283593" : "#E8EAF6",
                                color: showPlanImport ? "#fff" : "#1A237E", cursor: "pointer", fontSize: 12, fontWeight: 700 } }, showPlanImport ? "▲ إخفاء" : "▼ فتح")),
                    showPlanImport && (React.createElement("div", { style: { marginTop: 14, padding: "14px", background: "#F5F5F5", borderRadius: 16 } },
                        React.createElement("div", { style: { color: "#1A237E", fontSize: 11, lineHeight: 1.9, marginBottom: 10 } }, "\u0627\u0644\u0635\u0642 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062E\u0637\u0629 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0645\u0646 Excel (\u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631\u060C \u0627\u0644\u0627\u0633\u0645\u060C \u0627\u0644\u0633\u0627\u0639\u0627\u062A...)"),
                        React.createElement("textarea", { rows: 5, placeholder: "ICMT 121\tتجميع الحاسب وتشغيله\t1\t0\t4\t5\nINET 111\tمبادئ شبكات الحاسب\t3\t0\t2\t5", id: "plan-paste", style: { width: "100%", border: "1px solid #A5F3FC", borderRadius: 12, padding: 10,
                                fontSize: 10, fontFamily: "monospace", direction: "ltr", background: "#FFFFFF",
                                boxSizing: "border-box", resize: "vertical" } }),
                        React.createElement("div", { style: { color: "#00695C", fontSize: 10, marginTop: 6 } }, "\uD83D\uDCA1 \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629: \u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631 | \u0627\u0644\u0627\u0633\u0645 | \u0645\u062D\u0627\u0636\u0631\u0629 | \u062A\u0645\u0627\u0631\u064A\u0646 | \u0639\u0645\u0644\u064A | (\u0625\u062C\u0645\u0627\u0644\u064A)"),
                        React.createElement("button", { onClick: () => {
                                var _a;
                                const text = ((_a = document.getElementById("plan-paste")) === null || _a === void 0 ? void 0 : _a.value) || "";
                                const lines2 = text.split("\n").filter(l => l.trim());
                                let added = 0;
                                const newCourses = [...courses];
                                lines2.forEach(line => {
                                    const cols = line.split("\t").map(c => c.trim().replace(/\r/, ""));
                                    if (!cols[0])
                                        return;
                                    const exists = newCourses.find(c => c.code.replace(/\s/g, "") === cols[0].replace(/\s/g, ""));
                                    if (exists)
                                        return;
                                    const L = parseInt(cols[2]) || 0, T = parseInt(cols[3]) || 0, P = parseInt(cols[4]) || 0;
                                    newCourses.push({
                                        id: "c_" + Date.now() + "_" + added,
                                        code: cols[0], name: cols[1] || cols[0],
                                        spec: "gen", level: 1, L, T, P, CTH: L + T + P, coop: false
                                    });
                                    added++;
                                });
                                setCourses(newCourses);
                                setShowPlanImport(false);
                                alert(`✅ تمت إضافة ${added} مقرر جديد`);
                            }, style: { marginTop: 10, padding: "9px 18px", background: "#283593", color: "#fff",
                                border: "none", borderRadius: 14, cursor: "pointer", fontSize: 12, fontWeight: 700 } }, "\u2705 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A")))),
                React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid #8B5CF6", borderRadius: 20, padding: 16 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                            React.createElement("div", { style: { width: 40, height: 40, background: "#EDE9FE", borderRadius: 16,
                                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } }, "\uD83D\uDC65"),
                            React.createElement("div", null,
                                React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14 } }, "\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u0645\u062A\u0648\u0642\u0639"),
                                React.createElement("div", { style: { color: "#6D28D9", fontSize: 11 } }, totalCoursesWithCount > 0
                                    ? `${totalCoursesWithCount} مقرر — إجمالي ${totalEnrolled} متدرب`
                                    : "استيراد أعداد المتدربين من Excel"))),
                        React.createElement("button", { onClick: () => setShowEnrollImport(p => !p), style: { padding: "7px 14px", borderRadius: 14, border: "1px solid #8B5CF6",
                                background: showEnrollImport ? "#8B5CF6" : "#EDE9FE",
                                color: showEnrollImport ? "#fff" : "#6D28D9", cursor: "pointer", fontSize: 12, fontWeight: 700 } }, showEnrollImport ? "▲ إخفاء" : "▼ فتح")),
                    showEnrollImport && (React.createElement("div", { style: { marginTop: 14, padding: 14, background: "#FAF5FF", borderRadius: 16 } },
                        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 } },
                            React.createElement("div", null,
                                React.createElement("label", { style: { display: "block", color: "#6D28D9", fontSize: 11, fontWeight: 700, marginBottom: 3 } }, "\u0639\u0645\u0648\u062F \u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631"),
                                React.createElement("select", { id: "enr-code-col", defaultValue: "0", style: { width: "100%", border: "1px solid #DDD6FE", borderRadius: 10, padding: "6px 8px", fontSize: 11, background: "#FFFFFF" } }, ["العمود 1", "العمود 2", "العمود 3", "العمود 4", "العمود 5"].map((l, i) => React.createElement("option", { key: i, value: i }, l)))),
                            React.createElement("div", null,
                                React.createElement("label", { style: { display: "block", color: "#6D28D9", fontSize: 11, fontWeight: 700, marginBottom: 3 } }, "\u0639\u0645\u0648\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646"),
                                React.createElement("select", { id: "enr-count-col", defaultValue: "1", style: { width: "100%", border: "1px solid #DDD6FE", borderRadius: 10, padding: "6px 8px", fontSize: 11, background: "#FFFFFF" } }, ["العمود 1", "العمود 2", "العمود 3", "العمود 4", "العمود 5"].map((l, i) => React.createElement("option", { key: i, value: i }, l))))),
                        React.createElement("div", { style: { display: "flex", gap: 12, marginBottom: 8 } }, [{ v: "tab", l: "Tab" }, { v: ",", l: "فاصلة" }, { v: ";", l: "فاصلة منقوطة" }].map(s => (React.createElement("label", { key: s.v, style: { display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#6D28D9", cursor: "pointer" } },
                            React.createElement("input", { type: "radio", name: "enr-sep", value: s.v, defaultChecked: s.v === "tab" }),
                            s.l)))),
                        React.createElement("textarea", { rows: 6, id: "enr-paste", placeholder: "ICMT 121\t45\nINET 111\t38\nENGL 101\t72\n...", style: { width: "100%", border: "1px solid #DDD6FE", borderRadius: 12, padding: 10,
                                fontSize: 11, fontFamily: "monospace", direction: "ltr", background: "#FFFFFF",
                                boxSizing: "border-box", resize: "vertical" } }),
                        React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 10 } },
                            React.createElement("button", { onClick: () => {
                                    var _a, _b, _c, _d;
                                    const text = ((_a = document.getElementById("enr-paste")) === null || _a === void 0 ? void 0 : _a.value) || "";
                                    const codeCol = ((_b = document.getElementById("enr-code-col")) === null || _b === void 0 ? void 0 : _b.value) || "0";
                                    const countCol = ((_c = document.getElementById("enr-count-col")) === null || _c === void 0 ? void 0 : _c.value) || "1";
                                    const sep = ((_d = document.querySelector('input[name="enr-sep"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || "tab";
                                    importEnrolment(text, codeCol, countCol, sep);
                                    setShowEnrollImport(false);
                                }, style: { flex: 1, background: "linear-gradient(135deg,#5C6BC0,#3949AB)", color: "#fff", border: "none", borderRadius: 14,
                                    padding: "10px", cursor: "pointer", fontSize: 12, fontWeight: 700 } }, "\u2705 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0648\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0646\u0635\u0627\u0628"),
                            React.createElement("button", { onClick: () => setShowEnrollImport(false), style: { padding: "10px 14px", background: "#EDE9FE", color: "#6D28D9", border: "none",
                                    borderRadius: 14, cursor: "pointer", fontSize: 12 } }, "\u0625\u0644\u063A\u0627\u0621"))))),
                React.createElement("div", { style: { background: "#FFFFFF", border: "2px solid #F97316", borderRadius: 20, padding: 16 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                            React.createElement("div", { style: { width: 40, height: 40, background: "#FFF7ED", borderRadius: 16,
                                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } }, "\u2699\uFE0F"),
                            React.createElement("div", null,
                                React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14 } }, "\u0642\u064A\u0648\u062F \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629"),
                                React.createElement("div", { style: { color: "#C2410C", fontSize: 11 } },
                                    "\u0646\u0638\u0631\u064A: ",
                                    theoryCap,
                                    " \u0645\u062A\u062F\u0631\u0628/\u0634\u0639\u0628\u0629 | \u0639\u0645\u0644\u064A: ",
                                    practCap,
                                    " \u0645\u062A\u062F\u0631\u0628/\u0634\u0639\u0628\u0629"))),
                        React.createElement("button", { onClick: () => setShowLimits(p => !p), style: { padding: "7px 14px", borderRadius: 14, border: "1px solid #F97316",
                                background: showLimits ? "#F97316" : "#FFF7ED",
                                color: showLimits ? "#fff" : "#C2410C", cursor: "pointer", fontSize: 12, fontWeight: 700 } }, showLimits ? "▲ إخفاء" : "✏️ تعديل")),
                    showLimits && (React.createElement("div", { style: { marginTop: 14, padding: 14, background: "#FFF7ED", borderRadius: 16 } },
                        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 } },
                            React.createElement("div", null,
                                React.createElement("label", { style: { display: "block", color: "#C2410C", fontSize: 12, fontWeight: 700, marginBottom: 6 } }, "\uD83D\uDCD8 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0634\u0639\u0628\u0629 \u0627\u0644\u0646\u0638\u0631\u064A\u0629"),
                                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                    React.createElement("input", { type: "number", min: 1, max: 100, value: localTheory, onChange: e => setLocalTheory(+e.target.value || 35), style: { width: 70, border: "2px solid #F97316", borderRadius: 12, padding: "8px",
                                            fontSize: 16, fontWeight: 800, textAlign: "center", color: "#C2410C" } }),
                                    React.createElement("span", { style: { color: "#C2410C", fontSize: 12 } }, "\u0645\u062A\u062F\u0631\u0628"))),
                            React.createElement("div", null,
                                React.createElement("label", { style: { display: "block", color: "#065F46", fontSize: 12, fontWeight: 700, marginBottom: 6 } }, "\uD83D\uDD27 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0634\u0639\u0628\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629"),
                                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                    React.createElement("input", { type: "number", min: 1, max: 100, value: localPract, onChange: e => setLocalPract(+e.target.value || 20), style: { width: 70, border: "2px solid #10B981", borderRadius: 12, padding: "8px",
                                            fontSize: 16, fontWeight: 800, textAlign: "center", color: "#065F46" } }),
                                    React.createElement("span", { style: { color: "#065F46", fontSize: 12 } }, "\u0645\u062A\u062F\u0631\u0628")))),
                        React.createElement("button", { onClick: () => {
                                setTheoryCap(localTheory);
                                setPractCap(localPract);
                                setShowLimits(false);
                            }, style: { padding: "10px 24px", background: "#F97316", color: "#fff", border: "none",
                                borderRadius: 14, cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "\u2705 \u062D\u0641\u0638 \u0627\u0644\u0642\u064A\u0648\u062F"))))),
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid #A5F3FC", borderRadius: 20, padding: 16, marginBottom: 16 } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 } },
                    React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 700, fontSize: 13 } }, "\u23F0 \u062C\u062F\u0648\u0644 \u0627\u0644\u062D\u0635\u0635 \u0627\u0644\u064A\u0648\u0645\u064A"),
                    React.createElement(Btn, { onClick: () => setModal("periodSettings"), bg: "#E8EAF6", outline: true, sm: true }, "\u2699\uFE0F \u062A\u0639\u062F\u064A\u0644")),
                React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, periods.map(p => (React.createElement("div", { key: p.id, style: { background: "#E8EAF6", border: "1px solid #A5F3FC", borderRadius: 12, padding: "6px 12px", textAlign: "center", minWidth: 90 } },
                    React.createElement("div", { style: { color: "#283593", fontWeight: 700, fontSize: 11 } },
                        "\u0627\u0644\u062D\u0635\u0629 ",
                        p.label),
                    React.createElement("div", { style: { color: "#1A237E", fontSize: 10, direction: "ltr" } },
                        p.start,
                        "\u2013",
                        p.end))))))));
    };
    // ── COURSES TAB ───────────────────────────────────────────
    const CoursesTab = () => {
        const [fs, setFs] = (0, React.useState)("all");
        const [fl, setFl] = (0, React.useState)(0);
        const [addF, setAddF] = (0, React.useState)({ code: "", ar: "", name: "", spec: "net", level: 1, L: 2, P: 2, T: 0 });
        const vis = courses.filter(c => !c.coop && (fs === "all" || c.spec === fs) && (fl === 0 || c.level === fl));
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629"),
                React.createElement("div", { style: { display: "flex", gap: 8 } },
                    React.createElement(Btn, { onClick: () => setModal("assignCourses"), bg: "#8b5cf6", sm: true }, "\uD83D\uDCCB \u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0644\u0644\u0645\u0642\u0631\u0631\u0627\u062A"),
                    React.createElement(Btn, { onClick: () => setModal("addCourse") }, "+ \u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0631\u0631"))),
            React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" } },
                [{ id: "all", name: "الكل", color: "#00695C" }, ...SPECIALIZATIONS].map(s => (React.createElement("button", { key: s.id, onClick: () => setFs(s.id), style: { padding: "5px 12px", borderRadius: 12, border: `1px solid ${s.color}55`,
                        background: fs === s.id ? s.color : "transparent", color: fs === s.id ? "#fff" : s.color, cursor: "pointer", fontSize: 12, fontWeight: 600 } }, s.name))),
                React.createElement("div", { style: { marginRight: "auto", display: "flex", gap: 5 } }, [{ v: 0, l: "الكل" }, ...[1, 2, 3, 4, 5].map(x => ({ v: x, l: "فصل " + x }))].map(o => (React.createElement("button", { key: o.v, onClick: () => setFl(o.v), style: { padding: "5px 11px", borderRadius: 12, border: "1px solid #2a3a55",
                        background: fl === o.v ? "#C5CAE9" : "transparent", color: fl === o.v ? "#004D40" : "#00695C", cursor: "pointer", fontSize: 12 } }, o.l))))),
            React.createElement("div", { style: { overflowX: "auto", background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 20 } },
                React.createElement("table", { style: { borderCollapse: "collapse", width: "100%", fontSize: 12 } },
                    React.createElement("thead", null,
                        React.createElement("tr", { style: { background: "#F5F5F5" } }, ["الرمز", "الرمز العربي", "اسم المقرر", "التخصص", "الفصل", "مح", "عم", "مت", "س.أ", "مدرب النظري", "مدرب العملي", ""].map(h => (React.createElement("th", { key: h, style: { color: "#00695C", padding: "8px 10px", border: "1px solid #1e2d45", whiteSpace: "nowrap", textAlign: "center" } }, h))))),
                    React.createElement("tbody", null, vis.map(c => {
                        const col = spColor(c.spec);
                        const a = courseAssign[c.id] || {};
                        const tTr = trainers.find(x => x.id === a.theoryId);
                        const pTr = trainers.find(x => x.id === a.practicalId);
                        return (React.createElement("tr", { key: c.id },
                            React.createElement("td", { style: { padding: "7px 10px", color: col, fontWeight: 700, fontFamily: "monospace", fontSize: 11, border: "1px solid #1a2535" } }, c.code),
                            React.createElement("td", { style: { padding: "7px 10px", color: "#00695C", fontFamily: "monospace", fontSize: 11, border: "1px solid #1a2535" } }, c.ar),
                            React.createElement("td", { style: { padding: "7px 10px", color: "#004D40", border: "1px solid #1a2535" } }, c.name),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement(Badge, { color: col }, spName(c.spec))),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", color: "#00695C", border: "1px solid #1a2535" } }, c.level),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement(Badge, { color: "#3b82f6" }, c.L)),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement(Badge, { color: "#10b981" }, c.P)),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement(Badge, { color: "#8b5cf6" }, c.T)),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement(Badge, { color: "#f59e0b" }, c.CTH)),
                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #1a2535" } }, tTr ? React.createElement(Badge, { color: "#3b82f6" }, tTr.name) : React.createElement("span", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u2014")),
                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #1a2535" } }, pTr ? React.createElement(Badge, { color: "#10b981" }, pTr.name) : React.createElement("span", { style: { color: "#C5CAE9", fontSize: 10 } }, "\u2014")),
                            React.createElement("td", { style: { padding: "7px 10px", textAlign: "center", border: "1px solid #1a2535" } },
                                React.createElement("button", { onClick: () => setCourses(p => p.filter(x => x.id !== c.id)), style: { background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 14 } }, "\uD83D\uDDD1"))));
                    }))),
                React.createElement("div", { style: { padding: "8px 14px", color: "#C5CAE9", fontSize: 11 } },
                    vis.length,
                    " \u0645\u0642\u0631\u0631")),
            modal === "addCourse" && (React.createElement(Modal, { title: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0642\u0631\u0631 \u062C\u062F\u064A\u062F", onClose: () => setModal(null) },
                React.createElement(Fld, { label: "\u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631", value: addF.code, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { code: v }))) }),
                React.createElement(Fld, { label: "\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0639\u0631\u0628\u064A", value: addF.ar, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { ar: v }))) }),
                React.createElement(Fld, { label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0642\u0631\u0631", value: addF.name, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { name: v }))) }),
                React.createElement(Sel, { label: "\u0627\u0644\u062A\u062E\u0635\u0635", value: addF.spec, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { spec: v }))), opts: SPECIALIZATIONS.map(s => ({ v: s.id, l: s.name })) }),
                React.createElement(Sel, { label: "\u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A", value: addF.level, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { level: +v }))), opts: [1, 2, 3, 4, 5].map(l => ({ v: l, l: "الفصل " + l })) }),
                React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 } },
                    React.createElement(Fld, { label: "\u0645\u062D (\u0645\u062D\u0627\u0636\u0631\u0629 \u0646\u0638\u0631\u064A)", value: addF.L, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { L: +v }))), type: "number", min: 0 }),
                    React.createElement(Fld, { label: "\u0639\u0645 (\u0639\u0645\u0644\u064A/\u0648\u0631\u0634)", value: addF.P, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { P: +v }))), type: "number", min: 0 }),
                    React.createElement(Fld, { label: "\u0645\u062A (\u062A\u0645\u0627\u0631\u064A\u0646)", value: addF.T, onChange: v => setAddF(p => (Object.assign(Object.assign({}, p), { T: +v }))), type: "number", min: 0 })),
                React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: 10, marginBottom: 14, fontSize: 12, color: "#00695C" } },
                    "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629 (\u0633.\u0623): ",
                    React.createElement("strong", { style: { color: "#f59e0b", fontSize: 15 } }, addF.L + addF.P + addF.T),
                    React.createElement("br", null),
                    "\u0627\u0644\u0646\u0638\u0631\u064A (\u0645\u062D+\u0645\u062A): ",
                    React.createElement(Badge, { color: "#3b82f6" }, addF.L + addF.T),
                    " \u00A0 \u0627\u0644\u0639\u0645\u0644\u064A: ",
                    React.createElement(Badge, { color: "#10b981" }, addF.P)),
                React.createElement(Btn, { onClick: () => {
                        if (!addF.code || !addF.name)
                            return;
                        setCourses(p => [...p, Object.assign(Object.assign({}, addF), { id: uid(), CTH: addF.L + addF.P + addF.T })]);
                        setModal(null);
                    }, full: true }, "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0631\u0631"))),
            modal === "assignCourses" && (React.createElement(CourseAssignModal, { courses: courses, trainers: trainers, assignments: courseAssign, setAssignments: setCourseAssign, onClose: () => setModal(null) }))));
    };
    // ── TRAINERS TAB ──────────────────────────────────────────
    const TrainersTab = () => {
        const [f, setF] = (0, React.useState)({ name: "", specs: [], maxH: 18 });
        // ── تصدير المدربين JSON ──
        const exportTrainers = () => {
            const data = {
                version: "1.0",
                exportedAt: new Date().toLocaleString("ar-SA"),
                count: trainers.length,
                trainers: trainers,
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `مدربون-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(url);
        };
        // ── استيراد المدربين JSON ──
        const importTrainers = (e) => {
            const file = e.target.files[0];
            if (!file)
                return;
            const reader = new FileReader();
            reader.onload = ev => {
                try {
                    const data = JSON.parse(ev.target.result);
                    const list = data.trainers || data;
                    if (!Array.isArray(list)) {
                        alert("❌ ملف غير صحيح");
                        return;
                    }
                    // Validate entries
                    const valid = list.filter(t => t.name && t.specs && Array.isArray(t.specs));
                    if (!valid.length) {
                        alert("❌ لا يوجد بيانات مدربين صالحة");
                        return;
                    }
                    if (window.confirm(`سيتم استيراد ${valid.length} مدرب.\nهل تريد:\nموافق = استبدال الحالي\nإلغاء = إضافة للحالي`)) {
                        setTrainers(valid.map(t => (Object.assign(Object.assign({}, t), { id: t.id || uid() }))));
                    }
                    else {
                        setTrainers(p => [...p, ...valid.map(t => (Object.assign(Object.assign({}, t), { id: uid() })))]);
                    }
                    alert(`✅ تم استيراد ${valid.length} مدرب`);
                }
                catch (_a) {
                    alert("❌ خطأ في قراءة الملف");
                }
            };
            reader.readAsText(file, "UTF-8");
            e.target.value = "";
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 8 } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0627\u0644\u0645\u062F\u0631\u0628\u0648\u0646"),
                React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" } },
                    React.createElement("button", { onClick: exportTrainers, style: { padding: "7px 14px", borderRadius: 14, border: "1px solid #10B981",
                            background: "#ECFDF5", color: "#065F46", cursor: "pointer", fontSize: 12, fontWeight: 700,
                            display: "flex", alignItems: "center", gap: 5 } }, "\uD83D\uDCBE \u062A\u0635\u062F\u064A\u0631 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629"),
                    React.createElement("label", { style: { padding: "7px 14px", borderRadius: 14, border: "1px solid #8B5CF6",
                            background: "#EDE9FE", color: "#6D28D9", cursor: "pointer", fontSize: 12, fontWeight: 700,
                            display: "flex", alignItems: "center", gap: 5 } },
                        "\uD83D\uDCC2 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629",
                        React.createElement("input", { type: "file", accept: ".json", onChange: importTrainers, style: { display: "none" } })),
                    React.createElement(Btn, { onClick: () => {
                            const a = document.createElement("a");
                            a.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + TRAINERS_TEMPLATE_B64;
                            a.download = "قالب_المدربين.xlsx";
                            a.click();
                        }, bg: "#283593", outline: true, sm: true }, "\u2B07\uFE0F \u0642\u0627\u0644\u0628 Excel"),
                    React.createElement(Btn, { onClick: () => setModal("importTrainersExcel"), bg: "#10b981", outline: true, sm: true }, "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F Excel"),
                    React.createElement(Btn, { onClick: () => setModal("addTrainer"), bg: "#8b5cf6" }, "+ \u0625\u0636\u0627\u0641\u0629"))),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 14 } }, trainers.map(t => {
                const u = usedH(t.id), pct = Math.min(100, u / t.maxH * 100);
                // Courses assigned to this trainer
                const myTh = Object.entries(courseAssign).filter(([, a]) => a.theoryId === t.id).map(([cid]) => courses.find(c => c.id === cid)).filter(Boolean);
                const myPr = Object.entries(courseAssign).filter(([, a]) => a.practicalId === t.id).map(([cid]) => courses.find(c => c.id === cid)).filter(Boolean);
                return (React.createElement("div", { key: t.id, style: { background: "#FFFFFF", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 18 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 10 } },
                        React.createElement("div", null,
                            React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 700 } }, t.name),
                            React.createElement("div", { style: { color: "#00695C", fontSize: 11 } },
                                "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649: ",
                                t.maxH,
                                " \u0633\u0627\u0639\u0629/\u0623\u0633\u0628\u0648\u0639")),
                        React.createElement("div", { style: { display: "flex", gap: 6, alignItems: "center" } },
                            React.createElement("button", { onClick: () => setModal("offDays-" + t.id), title: "\u062A\u062D\u062F\u064A\u062F \u0623\u064A\u0627\u0645/\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0625\u062C\u0627\u0632\u0629", style: { background: "#FEF3C7", border: "1px solid #F59E0B", color: "#92400E",
                                    borderRadius: 10, padding: "4px 8px", cursor: "pointer", fontSize: 11, fontWeight: 700 } }, "\uD83C\uDFD6\uFE0F \u0625\u062C\u0627\u0632\u0629"),
                            React.createElement("button", { onClick: () => setModal("editTrainer-" + t.id), title: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0628", style: { background: "#E8EAF6", border: "1px solid #0E7490", color: "#1A237E",
                                    borderRadius: 10, padding: "4px 8px", cursor: "pointer", fontSize: 11, fontWeight: 700 } }, "\u270F\uFE0F \u062A\u0639\u062F\u064A\u0644"),
                            React.createElement("button", { onClick: () => setTrainers(p => p.filter(x => x.id !== t.id)), style: { background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 16 } }, "\u00D7"))),
                    React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 } }, t.specs.map(s => React.createElement(Badge, { key: s, color: spColor(s) }, spName(s)))),
                    ((t.offDays || []).length > 0 || (t.offSlots || []).length > 0) && (React.createElement("div", { style: { background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 12,
                            padding: "6px 10px", marginBottom: 8, fontSize: 10 } },
                        React.createElement("div", { style: { color: "#92400E", fontWeight: 700, marginBottom: 3 } }, "\uD83C\uDFD6\uFE0F \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0625\u062C\u0627\u0632\u0629:"),
                        (t.offDays || []).map(d => (React.createElement("span", { key: d, style: { background: "#F59E0B", color: "#fff", borderRadius: 4,
                                padding: "1px 7px", marginLeft: 4, fontSize: 9, fontWeight: 700 } },
                            d,
                            " (\u064A\u0648\u0645 \u0643\u0627\u0645\u0644)"))),
                        (t.offSlots || []).map((s, i) => (React.createElement("div", { key: i, style: { color: "#92400E", fontSize: 9, marginTop: 2 } },
                            s.day,
                            ": \u0627\u0644\u062D\u0635\u0635 ",
                            s.periods.join("، ")))))),
                    React.createElement("div", { style: { background: "#F5F5F5", borderRadius: 8, height: 6, overflow: "hidden", marginBottom: 5 } },
                        React.createElement("div", { style: { height: "100%", width: pct + "%", background: pct > 85 ? "#ef4444" : pct > 65 ? "#f59e0b" : "#10b981", borderRadius: 8 } })),
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 10 } },
                        u,
                        " / ",
                        t.maxH,
                        " \u0633\u0627\u0639\u0629 \u0645\u0648\u0632\u0639\u0629"),
                    myTh.length > 0 && (React.createElement("div", { style: { marginBottom: 6 } },
                        React.createElement("div", { style: { color: "#3b82f6", fontSize: 10, marginBottom: 4 } }, "\uD83D\uDCD8 \u064A\u062F\u0631\u0651\u0633 \u0627\u0644\u0646\u0638\u0631\u064A \u0641\u064A:"),
                        React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, myTh.map(c => React.createElement(Badge, { key: c.id, color: "#3b82f6" }, c.code))))),
                    myPr.length > 0 && (React.createElement("div", null,
                        React.createElement("div", { style: { color: "#10b981", fontSize: 10, marginBottom: 4 } }, "\uD83D\uDD27 \u064A\u062F\u0631\u0651\u0628 \u0627\u0644\u0639\u0645\u0644\u064A \u0641\u064A:"),
                        React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, myPr.map(c => React.createElement(Badge, { key: c.id, color: "#10b981" }, c.code)))))));
            })),
            modal && modal.startsWith("editTrainer-") && (() => {
                const tid = modal.replace("editTrainer-", "");
                const t = trainers.find(x => x.id === tid);
                if (!t)
                    return null;
                // Local state via a wrapper component
                const EditForm = () => {
                    const [name, setName] = (0, React.useState)(t.name);
                    const [maxH, setMaxH] = (0, React.useState)(t.maxH);
                    const [specs, setSpecs] = (0, React.useState)([...t.specs]);
                    const toggleSpec = (s) => setSpecs(p => p.includes(s) ? p.filter(x => x !== s) : [...p, s]);
                    const save = () => {
                        if (!name.trim()) {
                            alert("يرجى إدخال اسم المدرب");
                            return;
                        }
                        if (!specs.length) {
                            alert("يرجى اختيار تخصص واحد على الأقل");
                            return;
                        }
                        setTrainers(p => p.map(x => x.id === tid ? Object.assign(Object.assign({}, x), { name: name.trim(), maxH: +maxH || 18, specs }) : x));
                        setModal(null);
                    };
                    return (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#00000099", zIndex: 3000,
                            display: "flex", alignItems: "center", justifyContent: "center" } },
                        React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 24, padding: 24, width: 420,
                                direction: "rtl", boxShadow: "0 20px 60px #00000033" } },
                            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                                React.createElement("h3", { style: { color: "#1A1A2E", margin: 0, fontSize: 16, fontWeight: 800 } }, "\u270F\uFE0F \u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0628"),
                                React.createElement("button", { onClick: () => setModal(null), style: { background: "none", border: "none", color: "#1A237E", cursor: "pointer", fontSize: 22 } }, "\u00D7")),
                            React.createElement("div", { style: { marginBottom: 14 } },
                                React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 5 } }, "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u0631\u0628"),
                                React.createElement("input", { value: name, onChange: e => setName(e.target.value), style: { width: "100%", border: "2px solid #A5F3FC", borderRadius: 14, padding: "10px 12px",
                                        fontSize: 13, color: "#1A1A2E", background: "#F5F5F5", boxSizing: "border-box" } })),
                            React.createElement("div", { style: { marginBottom: 16 } },
                                React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 5 } }, "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629"),
                                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                                    React.createElement("input", { type: "number", min: 1, max: 40, value: maxH, onChange: e => setMaxH(+e.target.value || 18), style: { width: 90, border: "2px solid #A5F3FC", borderRadius: 14, padding: "10px",
                                            fontSize: 16, fontWeight: 800, textAlign: "center", color: "#1A237E", background: "#F5F5F5" } }),
                                    React.createElement("span", { style: { color: "#00695C", fontSize: 12 } }, "\u0633\u0627\u0639\u0629 / \u0623\u0633\u0628\u0648\u0639"))),
                            React.createElement("div", { style: { marginBottom: 20 } },
                                React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 8 } }, "\u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A"),
                                React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap" } }, SPECIALIZATIONS.map(sp => {
                                    const active = specs.includes(sp.id);
                                    return (React.createElement("button", { key: sp.id, onClick: () => toggleSpec(sp.id), style: { padding: "8px 16px", borderRadius: 14, border: `2px solid ${sp.color}`,
                                            background: active ? sp.color : "transparent",
                                            color: active ? "#fff" : sp.color, cursor: "pointer",
                                            fontSize: 12, fontWeight: 700, transition: "all 0.15s" } },
                                        active ? "✓ " : "",
                                        sp.name));
                                })),
                                specs.length > 0 && (React.createElement("div", { style: { marginTop: 8, display: "flex", flexWrap: "wrap", gap: 5 } }, specs.map(s => {
                                    const sp = SPECIALIZATIONS.find(x => x.id === s);
                                    return sp ? (React.createElement("span", { key: s, style: { background: sp.color + "22", color: sp.color,
                                            borderRadius: 8, padding: "2px 8px", fontSize: 11, fontWeight: 700 } }, sp.name)) : null;
                                })))),
                            React.createElement("div", { style: { display: "flex", gap: 10 } },
                                React.createElement("button", { onClick: save, style: { flex: 1, background: "#283593", color: "#fff", border: "none", borderRadius: 16,
                                        padding: "12px", cursor: "pointer", fontSize: 14, fontWeight: 800 } }, "\u2705 \u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A"),
                                React.createElement("button", { onClick: () => setModal(null), style: { padding: "12px 18px", background: "#F5F5F5", color: "#1A237E",
                                        border: "1px solid #A5F3FC", borderRadius: 16, cursor: "pointer", fontSize: 13 } }, "\u0625\u0644\u063A\u0627\u0621")))));
                };
                return React.createElement(EditForm, { key: tid });
            })(),
            modal && modal.startsWith("offDays-") && (() => {
                const tid = modal.replace("offDays-", "");
                const t = trainers.find(x => x.id === tid);
                if (!t)
                    return null;
                const offDays = t.offDays || [];
                const offSlots = t.offSlots || [];
                const toggleDay = (day) => {
                    const has = offDays.includes(day);
                    const newDays = has ? offDays.filter(d => d !== day) : [...offDays, day];
                    const newSlots = has ? offSlots : offSlots.filter(s => s.day !== day);
                    setTrainers(p => p.map(x => x.id === tid ? Object.assign(Object.assign({}, x), { offDays: newDays, offSlots: newSlots }) : x));
                };
                const toggleSlot = (day, period) => {
                    const newDays = offDays.filter(d => d !== day);
                    const existing = offSlots.find(s => s.day === day);
                    let newSlots;
                    if (existing) {
                        const hasPeriod = existing.periods.includes(period);
                        const newPeriods = hasPeriod
                            ? existing.periods.filter(p => p !== period)
                            : [...existing.periods, period];
                        newSlots = newPeriods.length === 0
                            ? offSlots.filter(s => s.day !== day)
                            : offSlots.map(s => s.day === day ? Object.assign(Object.assign({}, s), { periods: newPeriods }) : s);
                    }
                    else {
                        newSlots = [...offSlots, { day, periods: [period] }];
                    }
                    setTrainers(p => p.map(x => x.id === tid ? Object.assign(Object.assign({}, x), { offDays: newDays, offSlots: newSlots }) : x));
                };
                return (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#00000099", zIndex: 3000,
                        display: "flex", alignItems: "center", justifyContent: "center" } },
                    React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 24, padding: 24, width: 480,
                            maxHeight: "85vh", overflow: "auto", direction: "rtl", boxShadow: "0 20px 60px #00000033" } },
                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                            React.createElement("div", null,
                                React.createElement("h3", { style: { color: "#1A1A2E", margin: 0, fontSize: 16, fontWeight: 800 } },
                                    "\"\uD83C\uDFD6\uFE0F\" ",
                                    "أوقات إجازة المدرب"),
                                React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginTop: 3 } }, t.name)),
                            React.createElement("button", { onClick: () => setModal(null), style: { background: "none", border: "none", color: "#1A237E", cursor: "pointer", fontSize: 22 } }, "×")),
                        React.createElement("div", { style: { color: "#1A237E", fontSize: 12, marginBottom: 16, background: "#FEF3C7",
                                border: "1px solid #F59E0B", borderRadius: 12, padding: "8px 12px" } },
                            "💡",
                            " ",
                            "اختر يوماً كاملاً للإجازة، أو اختر حصصاً محددة من أي يوم"),
                        DAYS.map(day => {
                            const isFullDay = offDays.includes(day);
                            const slotEntry = offSlots.find(s => s.day === day);
                            const selPeriods = (slotEntry === null || slotEntry === void 0 ? void 0 : slotEntry.periods) || [];
                            return (React.createElement("div", { key: day, style: { marginBottom: 12, border: `2px solid ${isFullDay ? "#F59E0B" : "#C5CAE9"}`,
                                    borderRadius: 16, padding: 12, background: isFullDay ? "#FEF9E7" : "#F5F5F5" } },
                                React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: isFullDay ? 0 : 8 } },
                                    React.createElement("div", { style: { fontWeight: 700, fontSize: 13, color: isFullDay ? "#92400E" : "#004D40" } }, day),
                                    React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 6, cursor: "pointer" } },
                                        React.createElement("input", { type: "checkbox", checked: isFullDay, onChange: () => toggleDay(day), style: { width: 16, height: 16, cursor: "pointer", accentColor: "#F59E0B" } }),
                                        React.createElement("span", { style: { fontSize: 11, fontWeight: 700, color: isFullDay ? "#92400E" : "#00695C" } }, "يوم كامل"))),
                                !isFullDay && (React.createElement("div", null,
                                    React.createElement("div", { style: { color: "#00695C", fontSize: 10, marginBottom: 6 } }, "أو اختر حصصاً:"),
                                    React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, periods.map(pr => {
                                        const sel = selPeriods.includes(pr.id);
                                        return (React.createElement("button", { key: pr.id, onClick: () => toggleSlot(day, pr.id), style: { padding: "5px 10px", borderRadius: 10, fontSize: 10, fontWeight: 700,
                                                cursor: "pointer", border: "none",
                                                background: sel ? "#F59E0B" : "#C5CAE9",
                                                color: sel ? "#fff" : "#00897B" } },
                                            pr.label,
                                            React.createElement("span", { style: { fontSize: 8, display: "block", fontWeight: 400,
                                                    color: sel ? "#FDE68A" : "#00897B" } }, pr.start)));
                                    }))))));
                        }),
                        (offDays.length > 0 || offSlots.some(s => s.periods.length > 0)) && (React.createElement("div", { style: { background: "#FEF3C7", border: "1px solid #F59E0B", borderRadius: 16,
                                padding: "10px 14px", marginTop: 12, fontSize: 11, color: "#92400E" } },
                            React.createElement("div", { style: { fontWeight: 700, marginBottom: 6 } }, "📋 ملخص الإجازات:"),
                            offDays.map(d => (React.createElement("div", { key: d },
                                "•",
                                " ",
                                d,
                                ": ",
                                "إجازة يوم كامل"))),
                            offSlots.filter(s => s.periods.length > 0).map((s, i) => (React.createElement("div", { key: i },
                                "•",
                                " ",
                                s.day,
                                ": ",
                                "حصص",
                                " ",
                                s.periods.map(p => { var _a; return (_a = periods.find(x => x.id === p)) === null || _a === void 0 ? void 0 : _a.label; }).join("، ")))))),
                        React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 16 } },
                            React.createElement("button", { onClick: () => setModal(null), style: { flex: 1, background: "#1A237E", color: "#fff", border: "none",
                                    borderRadius: 16, padding: "11px", cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "✅ حفظ"),
                            React.createElement("button", { onClick: () => setTrainers(p => p.map(x => x.id === tid ? Object.assign(Object.assign({}, x), { offDays: [], offSlots: [] }) : x)), style: { padding: "11px 14px", background: "#FEE2E2", color: "#991B1B",
                                    border: "none", borderRadius: 16, cursor: "pointer", fontSize: 12, fontWeight: 700 } }, "مسح الكل")))));
            })(),
            modal === "addTrainer" && (React.createElement(Modal, { title: "\u0625\u0636\u0627\u0641\u0629 \u0645\u062F\u0631\u0628", onClose: () => setModal(null) },
                React.createElement(Fld, { label: "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u0631\u0628", value: f.name, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { name: v }))) }),
                React.createElement(Fld, { label: "\u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0644\u0644\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064A\u0629", value: f.maxH, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { maxH: +v }))), type: "number", min: 1, max: 40 }),
                React.createElement("div", { style: { marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 8 } }, "\u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0627\u0644\u0645\u0624\u0647\u0644 \u0644\u0647\u0627"),
                    SPECIALIZATIONS.map(s => (React.createElement("label", { key: s.id, style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 7, cursor: "pointer" } },
                        React.createElement("input", { type: "checkbox", checked: f.specs.includes(s.id), onChange: e => setF(p => (Object.assign(Object.assign({}, p), { specs: e.target.checked ? [...p.specs, s.id] : p.specs.filter(x => x !== s.id) }))) }),
                        React.createElement("span", { style: { color: s.color, fontWeight: 600 } }, s.name))))),
                React.createElement(Btn, { bg: "#8b5cf6", full: true, onClick: () => {
                        if (!f.name)
                            return;
                        setTrainers(p => [...p, Object.assign(Object.assign({}, f), { id: uid() })]);
                        setF({ name: "", specs: [], maxH: 18 });
                        setModal(null);
                    } }, "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062F\u0631\u0628"))),
            modal === "importTrainersExcel" && (React.createElement(Modal, { title: "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0645\u0646 Excel", onClose: () => setModal(null), wide: true },
                React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 16, padding: 14, marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 12, marginBottom: 10, fontWeight: 700 } }, "\uD83D\uDCCB \u062A\u0639\u0644\u064A\u0645\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F"),
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, lineHeight: 2 } },
                        "1. \u062D\u0645\u0651\u0644 \u0646\u0645\u0648\u0630\u062C Excel \u0645\u0646 \u0627\u0644\u0632\u0631 \u0623\u062F\u0646\u0627\u0647",
                        React.createElement("br", null),
                        "2. \u0639\u0628\u0651\u0626 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0627\u0628\u062A\u062F\u0627\u0621\u064B \u0645\u0646 ",
                        React.createElement("strong", { style: { color: "#f59e0b" } }, "\u0627\u0644\u0635\u0641 7"),
                        React.createElement("br", null),
                        "3. \u0627\u062D\u0641\u0638 \u0627\u0644\u0645\u0644\u0641 \u062B\u0645 \u0627\u0631\u0641\u0639\u0647 \u0647\u0646\u0627",
                        React.createElement("br", null),
                        "4. \u0633\u064A\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0645\u0639 \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A \u0648\u0627\u0644\u0633\u0627\u0639\u0627\u062A")),
                React.createElement("div", { style: { overflowX: "auto", marginBottom: 14 } },
                    React.createElement("table", { style: { borderCollapse: "collapse", fontSize: 11, width: "100%" } },
                        React.createElement("thead", null,
                            React.createElement("tr", { style: { background: "#C5CAE9" } }, ["العمود", "الحقل", "مثال", "إلزامي؟"].map(h => (React.createElement("th", { key: h, style: { color: "#283593", padding: "6px 10px", border: "1px solid #1e2d45", textAlign: "center" } }, h))))),
                        React.createElement("tbody", null, [
                            ["A", "اسم المدرب", "أ. محمد العمري", "✅ إلزامي"],
                            ["B", "رقم الموظف", "1001", "اختياري"],
                            ["C", "الدرجة العلمية", "بكالوريوس", "اختياري"],
                            ["D", "التخصص 1", "net / auto / gen", "✅ إلزامي"],
                            ["E", "التخصص 2", "net / auto / gen", "اختياري"],
                            ["F", "التخصص 3", "net / auto / gen", "اختياري"],
                            ["G", "الحد الأقصى للساعات", "18", "✅ إلزامي"],
                            ["H", "البريد الإلكتروني", "name@edu.sa", "اختياري"],
                            ["I", "ملاحظات", "—", "اختياري"],
                        ].map(([col, field, ex, req]) => (React.createElement("tr", { key: col, style: { background: req.includes("✅") ? "#1a2e1a" : "#FFFFFF" } },
                            React.createElement("td", { style: { padding: "5px 10px", border: "1px solid #1e2d45", textAlign: "center", color: "#0ea5e9", fontWeight: 700, fontFamily: "monospace" } }, col),
                            React.createElement("td", { style: { padding: "5px 10px", border: "1px solid #1e2d45", color: "#004D40" } }, field),
                            React.createElement("td", { style: { padding: "5px 10px", border: "1px solid #1e2d45", color: "#00695C", fontFamily: "monospace" } }, ex),
                            React.createElement("td", { style: { padding: "5px 10px", border: "1px solid #1e2d45", textAlign: "center", color: req.includes("✅") ? "#10b981" : "#00695C" } }, req))))))),
                React.createElement("div", { style: { marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 8 } }, "\uD83D\uDCC1 \u0631\u0641\u0639 \u0645\u0644\u0641 Excel \u0623\u0648 CSV:"),
                    React.createElement("input", { type: "file", accept: ".xlsx,.xls,.csv", onChange: async (e) => {
                            const file = e.target.files[0];
                            if (!file)
                                return;
                            const name = file.name.toLowerCase();
                            const reader = new FileReader();
                            const parseTrainers = (lines, sep) => {
                                // Skip header rows (first 5 rows of template)
                                const data = lines.slice(5).filter(l => l.trim());
                                return data.map(line => {
                                    const cols = line.split(sep).map(c => c.replace(/"/g, "").trim());
                                    if (!cols[0] || !cols[3])
                                        return null; // name + spec1 required
                                    const specs = [cols[3], cols[4], cols[5]].filter(s => ["net", "auto", "gen"].includes(s));
                                    if (!specs.length)
                                        return null;
                                    const offDays = (cols[8] || "").split(/[,،\/]/).map(d => d.trim()).filter(d => ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].includes(d));
                                    return {
                                        id: uid(), name: cols[0], specs,
                                        maxH: +cols[6] || 18,
                                        offDays, offSlots: [],
                                    };
                                }).filter(Boolean);
                            };
                            if (name.endsWith(".csv")) {
                                reader.onload = ev => {
                                    const txt = ev.target.result;
                                    // Detect separator
                                    const sep = txt.includes("\t") ? "\t" : ",";
                                    const lines = txt.split("\n");
                                    const imported = parseTrainers(lines, sep);
                                    if (imported.length) {
                                        setTrainers(p => [...p, ...imported]);
                                        setModal(null);
                                        alert(`✅ تم استيراد ${imported.length} مدرب بنجاح!`);
                                    }
                                    else
                                        alert("❌ لم يتم العثور على بيانات.\nتأكد من حفظ الملف بصيغة CSV وتعبئة البيانات من الصف 6.");
                                };
                                reader.readAsText(file, "UTF-8");
                            }
                            else {
                                alert("💡 احفظ ملف Excel بصيغة CSV:\nملف ← حفظ باسم ← CSV UTF-8\nثم ارفع ملف الـ CSV هنا.");
                            }
                        }, style: { display: "block", width: "100%", background: "#F5F5F5", border: "2px dashed #0E7490",
                            borderRadius: 16, padding: "20px", color: "#00695C", fontSize: 12, cursor: "pointer", boxSizing: "border-box" } })),
                React.createElement("div", { style: { marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 6, fontWeight: 700 } }, "\u0623\u0648 \u0627\u0644\u0635\u0642 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0646 Excel \u0645\u0628\u0627\u0634\u0631\u0629 (Ctrl+C \u062B\u0645 Ctrl+V):"),
                    React.createElement("textarea", { id: "trainer-csv-input", rows: 5, placeholder: "أ. محمد العمري\t1001\tبكالوريوس\tnet\tgen\t\t18\t\tالأحد\t\nأ. سارة الزهراني\t1002\tماجستير\tauto\tgen\t\t16", style: { width: "100%", background: "#F5F5F5", border: "1px solid #A5F3FC", borderRadius: 12,
                            padding: 10, color: "#004D40", fontSize: 11, fontFamily: "monospace", boxSizing: "border-box", direction: "ltr" } })),
                React.createElement("div", { style: { display: "flex", gap: 10 } },
                    React.createElement("button", { onClick: () => {
                            var _a;
                            const txt = ((_a = document.getElementById("trainer-csv-input")) === null || _a === void 0 ? void 0 : _a.value) || "";
                            const lines = txt.split("\n").filter(l => l.trim());
                            // Auto-detect separator
                            const sep = txt.includes("\t") ? "\t" : ",";
                            const imported = lines.map(line => {
                                const cols = line.split(sep).map(c => c.replace(/"/g, "").trim());
                                if (!cols[0])
                                    return null;
                                const specs = [cols[3], cols[4], cols[5]].filter(s => ["net", "auto", "gen"].includes(s));
                                if (!specs.length)
                                    return null;
                                const offDays = (cols[8] || "").split(/[,،\/]/).map(d => d.trim()).filter(d => ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].includes(d));
                                return { id: uid(), name: cols[0], specs, maxH: +cols[6] || 18, offDays, offSlots: [] };
                            }).filter(Boolean);
                            if (!imported.length) {
                                alert("❌ لا توجد بيانات.\nتأكد من نسخ البيانات من القالب مباشرة.");
                                return;
                            }
                            setTrainers(p => [...p, ...imported]);
                            setModal(null);
                            alert(`✅ تم استيراد ${imported.length} مدرب!`);
                        }, style: { flex: 1, background: "#8b5cf6", color: "#fff", border: "none", borderRadius: 14,
                            padding: "10px", cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "\u2705 \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0646 \u0627\u0644\u0646\u0635"),
                    React.createElement("button", { onClick: () => setModal(null), style: { flex: 1, background: "transparent", color: "#00695C", border: "1px solid #334155",
                            borderRadius: 14, padding: "10px", cursor: "pointer", fontSize: 13 } }, "\u0625\u0644\u063A\u0627\u0621"))))));
    };
    // ── HALLS TAB ─────────────────────────────────────────────
    const HallsTab = () => {
        const [f, setF] = (0, React.useState)({ name: "", cap: 30, type: "theory", specs: ["all"] });
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0627\u0644\u0642\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0645\u062E\u062A\u0628\u0631\u0627\u062A \u0648\u0627\u0644\u0648\u0631\u0634"),
                React.createElement(Btn, { onClick: () => {
                        const a = document.createElement("a");
                        a.href = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + HALLS_TEMPLATE_B64;
                        a.download = "قالب_القاعات.xlsx";
                        a.click();
                    }, bg: "#283593", outline: true, sm: true }, "\u2B07\uFE0F \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0642\u0627\u0644\u0628"),
                React.createElement(Btn, { onClick: () => setModal("importHalls"), bg: "#8b5cf6", outline: true, sm: true }, "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F Excel"),
                React.createElement(Btn, { onClick: () => setModal("addHall"), bg: "#10b981" }, "+ \u0625\u0636\u0627\u0641\u0629")),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 13 } }, halls.map(h => (React.createElement("div", { key: h.id, style: { background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 20, padding: 17 } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 8 } },
                    React.createElement("div", null,
                        React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 700 } }, h.name),
                        React.createElement("div", { style: { color: "#00695C", fontSize: 11 } },
                            "\u0627\u0644\u0633\u0639\u0629: ",
                            h.cap,
                            " \u0645\u062A\u062F\u0631\u0628")),
                    React.createElement("button", { onClick: () => setHalls(p => p.filter(x => x.id !== h.id)), style: { background: "none", border: "none", color: "#ef4444", cursor: "pointer" } }, "\u00D7")),
                React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } },
                    React.createElement(Badge, { color: h.type === "theory" ? "#3b82f6" : "#10b981" }, h.type === "theory" ? "🏫 نظري" : "🔧 عملي/ورشة"),
                    h.specs.map(s => s === "all" ? React.createElement(Badge, { key: "a", color: "#f59e0b" }, "\u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A") : React.createElement(Badge, { key: s, color: spColor(s) }, spName(s)))))))),
            modal === "importHalls" && (React.createElement(Modal, { title: "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0627\u0644\u0642\u0627\u0639\u0627\u062A \u0645\u0646 Excel", onClose: () => setModal(null) },
                React.createElement("div", { style: { color: "#1A237E", fontSize: 11, lineHeight: 1.9, marginBottom: 12,
                        background: "#E8EAF6", border: "1px solid #A5F3FC", borderRadius: 12, padding: "10px 14px" } },
                    React.createElement("strong", null, "\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F:"),
                    React.createElement("br", null),
                    "\u0661. \u062D\u0645\u0651\u0644 \u0627\u0644\u0642\u0627\u0644\u0628 \u0648\u0639\u0628\u0651\u0626\u0647",
                    React.createElement("br", null),
                    "\u0662. \u0641\u064A Excel: \u062D\u062F\u062F \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u2190 \u0646\u0633\u062E (Ctrl+C)",
                    React.createElement("br", null),
                    "\u0663. \u0627\u0644\u0635\u0642 \u0641\u064A \u0627\u0644\u0645\u0631\u0628\u0639 \u0623\u062F\u0646\u0627\u0647 (Ctrl+V)",
                    React.createElement("br", null),
                    "\u0627\u0644\u0623\u0639\u0645\u062F\u0629: ",
                    React.createElement("strong", null, "\u0627\u0644\u0627\u0633\u0645 | \u0627\u0644\u0631\u0642\u0645 | \u0627\u0644\u0646\u0648\u0639 | \u0627\u0644\u0633\u0639\u0629 | \u0627\u0644\u062A\u062E\u0635\u0635")),
                React.createElement("div", { style: { marginBottom: 10 } },
                    React.createElement("div", { style: { color: "#1A237E", fontSize: 11, fontWeight: 700, marginBottom: 4 } }, "\u0627\u0644\u0635\u0642 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0647\u0646\u0627:"),
                    React.createElement("textarea", { id: "halls-paste", rows: 7, placeholder: "قاعة 101\t101\ttheory\t30\tall\nمختبر شبكات 1\tN101\tpractical\t20\tnet\nورشة محركات 1\tA101\tpractical\t20\tauto", style: { width: "100%", border: "1px solid #A5F3FC", borderRadius: 12, padding: 10,
                            fontSize: 11, fontFamily: "monospace", direction: "ltr", background: "#F5F5F5",
                            boxSizing: "border-box", resize: "vertical" } })),
                React.createElement("div", { style: { display: "flex", gap: 10 } },
                    React.createElement(Btn, { bg: "#8b5cf6", onClick: () => {
                            var _a;
                            const txt = ((_a = document.getElementById("halls-paste")) === null || _a === void 0 ? void 0 : _a.value) || "";
                            const lines = txt.split("\n").filter(l => l.trim());
                            const sep = txt.includes("\t") ? "\t" : ",";
                            let imported = 0;
                            const newHalls = [];
                            lines.forEach(line => {
                                const cols = line.split(sep).map(c => c.replace(/"/g, "").trim());
                                if (!cols[0])
                                    return;
                                const type = cols[2] === "practical" ? "practical" : "theory";
                                const cap = parseInt(cols[3]) || 30;
                                const spec = cols[4] || "all";
                                newHalls.push({
                                    id: uid(), name: cols[0],
                                    type, cap,
                                    specs: [["all", "net", "auto"].includes(spec) ? spec : "all"]
                                });
                                imported++;
                            });
                            if (!imported) {
                                alert("❌ لا توجد بيانات.");
                                return;
                            }
                            setHalls(p => [...p, ...newHalls]);
                            setModal(null);
                            alert(`✅ تم استيراد ${imported} قاعة/مختبر`);
                        } }, "\u2705 \u0627\u0633\u062A\u064A\u0631\u0627\u062F"),
                    React.createElement(Btn, { bg: "#64748B", outline: true, onClick: () => setModal(null) }, "\u0625\u0644\u063A\u0627\u0621")))),
            modal === "addHall" && (React.createElement(Modal, { title: "\u0625\u0636\u0627\u0641\u0629 \u0642\u0627\u0639\u0629 / \u0645\u062E\u062A\u0628\u0631 / \u0648\u0631\u0634\u0629", onClose: () => setModal(null) },
                React.createElement(Fld, { label: "\u0627\u0644\u0627\u0633\u0645", value: f.name, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { name: v }))) }),
                React.createElement(Fld, { label: "\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0627\u0633\u062A\u064A\u0639\u0627\u0628\u064A\u0629", value: f.cap, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { cap: +v }))), type: "number", min: 1 }),
                React.createElement(Sel, { label: "\u0627\u0644\u0646\u0648\u0639", value: f.type, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { type: v }))), opts: [{ v: "theory", l: "🏫 نظري/محاضرة" }, { v: "practical", l: "🔧 عملي/مختبر/ورشة" }] }),
                React.createElement("div", { style: { marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 8 } }, "\u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u062A\u062E\u0635\u0635"),
                    React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 7, cursor: "pointer" } },
                        React.createElement("input", { type: "checkbox", checked: f.specs.includes("all"), onChange: e => setF(p => (Object.assign(Object.assign({}, p), { specs: e.target.checked ? ["all"] : [] }))) }),
                        React.createElement("span", { style: { color: "#f59e0b" } }, "\u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u062E\u0635\u0635\u0627\u062A")),
                    !f.specs.includes("all") && SPECIALIZATIONS.map(s => (React.createElement("label", { key: s.id, style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 7, cursor: "pointer" } },
                        React.createElement("input", { type: "checkbox", checked: f.specs.includes(s.id), onChange: e => setF(p => (Object.assign(Object.assign({}, p), { specs: e.target.checked ? [...p.specs.filter(x => x !== "all"), s.id] : p.specs.filter(x => x !== s.id) }))) }),
                        React.createElement("span", { style: { color: s.color } }, s.name))))),
                React.createElement(Btn, { bg: "#10b981", full: true, onClick: () => {
                        if (!f.name)
                            return;
                        setHalls(p => [...p, Object.assign(Object.assign({}, f), { id: uid() })]);
                        setF({ name: "", cap: 30, type: "theory", specs: ["all"] });
                        setModal(null);
                    } }, "\u0625\u0636\u0627\u0641\u0629")))));
    };
    // ── TRAINEES TAB ──────────────────────────────────────────
    const TraineesTab = () => {
        const [ls, setLs] = (0, React.useState)("net");
        const [ll, setLl] = (0, React.useState)(1);
        const [f, setF] = (0, React.useState)({ name: "", sid: "", spec: "net", level: 1, rem: [] });
        const filt = trainees.filter(t => t.spec === ls && t.level === ll);
        const av = courses.filter(c => !c.coop && (c.spec === ls || c.spec === "gen"));
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0627\u0644\u0645\u062A\u062F\u0631\u0628\u0648\u0646"),
                React.createElement("div", { style: { display: "flex", gap: 8 } },
                    React.createElement(Btn, { onClick: () => setModal("import"), bg: "#C5CAE9", outline: true, sm: true }, "\uD83D\uDCE5 \u0627\u0633\u062A\u064A\u0631\u0627\u062F CSV"),
                    React.createElement(Btn, { onClick: () => setModal("addTrainee"), bg: "#f59e0b" }, "+ \u0625\u0636\u0627\u0641\u0629"))),
            React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" } },
                SPECIALIZATIONS.filter(s => !s.shared).map(s => (React.createElement("button", { key: s.id, onClick: () => setLs(s.id), style: { padding: "6px 14px", borderRadius: 12, border: `1px solid ${s.color}55`,
                        background: ls === s.id ? s.color : "transparent", color: ls === s.id ? "#fff" : s.color, cursor: "pointer", fontSize: 12, fontWeight: 600 } }, s.name))),
                React.createElement("div", { style: { marginRight: "auto", display: "flex", gap: 5 } }, [1, 2, 3, 4, 5].map(l => (React.createElement("button", { key: l, onClick: () => setLl(l), style: { padding: "6px 12px", borderRadius: 12, border: "1px solid #2a3a55",
                        background: ll === l ? "#C5CAE9" : "transparent", color: ll === l ? "#004D40" : "#00695C", cursor: "pointer", fontSize: 12 } },
                    "\u0645",
                    l))))),
            React.createElement("div", { style: { color: "#00695C", fontSize: 12, marginBottom: 12 } },
                "\u0627\u0644\u0639\u062F\u062F: ",
                React.createElement("strong", { style: { color: "#004D40" } }, filt.length)),
            filt.length === 0
                ? React.createElement("div", { style: { textAlign: "center", padding: 40, border: "1px dashed #1e2d45", borderRadius: 16, color: "#C5CAE9" } }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062A\u062F\u0631\u0628\u0648\u0646")
                : (React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: 12 } }, filt.map(t => (React.createElement("div", { key: t._id, style: { background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 16, padding: 15 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 7 } },
                        React.createElement("div", null,
                            React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 700 } }, t.name),
                            React.createElement("div", { style: { color: "#00695C", fontSize: 11 } }, t.sid)),
                        React.createElement("button", { onClick: () => setTrainees(p => p.filter(x => x._id !== t._id)), style: { background: "none", border: "none", color: "#ef4444", cursor: "pointer" } }, "\u00D7")),
                    React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 4 } }, t.rem.map(cid => { const c = courses.find(x => x.id === cid); return c ? React.createElement(Badge, { key: cid, color: spColor(c.spec) }, c.code) : null; }))))))),
            modal === "addTrainee" && (React.createElement(Modal, { title: "\u0625\u0636\u0627\u0641\u0629 \u0645\u062A\u062F\u0631\u0628", onClose: () => setModal(null) },
                React.createElement(Fld, { label: "\u0627\u0644\u0627\u0633\u0645", value: f.name, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { name: v }))) }),
                React.createElement(Fld, { label: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641", value: f.sid, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { sid: v }))) }),
                React.createElement(Sel, { label: "\u0627\u0644\u062A\u062E\u0635\u0635", value: f.spec, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { spec: v }))), opts: SPECIALIZATIONS.filter(s => !s.shared).map(s => ({ v: s.id, l: s.name })) }),
                React.createElement(Sel, { label: "\u0627\u0644\u0641\u0635\u0644", value: f.level, onChange: v => setF(p => (Object.assign(Object.assign({}, p), { level: +v }))), opts: [1, 2, 3, 4, 5].map(l => ({ v: l, l: "الفصل " + l })) }),
                React.createElement("div", { style: { marginBottom: 14 } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginBottom: 7 } }, "\u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629"),
                    React.createElement("div", { style: { maxHeight: 190, overflow: "auto", background: "#FFFFFF", borderRadius: 12, padding: 10 } }, av.map(c => (React.createElement("label", { key: c.id, style: { display: "flex", alignItems: "center", gap: 7, marginBottom: 7, cursor: "pointer" } },
                        React.createElement("input", { type: "checkbox", checked: f.rem.includes(c.id), onChange: e => setF(p => (Object.assign(Object.assign({}, p), { rem: e.target.checked ? [...p.rem, c.id] : p.rem.filter(x => x !== c.id) }))) }),
                        React.createElement(Badge, { color: spColor(c.spec) }, c.code),
                        React.createElement("span", { style: { color: "#004D40", fontSize: 11 } },
                            c.name,
                            " \u2014 \u0645",
                            c.level)))))),
                React.createElement(Btn, { bg: "#f59e0b", full: true, onClick: () => {
                        if (!f.name)
                            return;
                        setTrainees(p => [...p, { name: f.name, sid: f.sid, spec: f.spec, level: f.level, rem: f.rem, _id: uid() }]);
                        setF({ name: "", sid: "", spec: "net", level: 1, rem: [] });
                        setModal(null);
                    } }, "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062A\u062F\u0631\u0628"))),
            modal === "import" && (React.createElement(Modal, { title: "\u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646", onClose: () => setModal(null), wide: true },
                React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 12, padding: 11, marginBottom: 11, fontSize: 10, color: "#00695C", fontFamily: "monospace", lineHeight: 1.9 } },
                    "\u0627\u0644\u0635\u064A\u063A\u0629: \u0627\u0644\u0627\u0633\u0645,\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641,\u0627\u0644\u062A\u062E\u0635\u0635(net/auto),\u0627\u0644\u0641\u0635\u0644,\u0623\u0643\u0648\u0627\u062F \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A(\u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0640 ;)",
                    React.createElement("br", null),
                    "\u0645\u062B\u0627\u0644:",
                    React.createElement("br", null),
                    "\u0645\u062D\u0645\u062F \u0627\u0644\u0639\u0645\u0631\u064A,1001,net,2,ICMT 102;ISUP 151;ENGL 102"),
                React.createElement("textarea", { value: importTxt, onChange: e => setImportTxt(e.target.value), rows: 7, style: { width: "100%", background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 12,
                        padding: 11, color: "#004D40", fontSize: 12, fontFamily: "monospace", boxSizing: "border-box", direction: "ltr" } }),
                React.createElement("div", { style: { color: "#00695C", fontSize: 12, margin: "8px 0" } },
                    "\u0633\u064A\u062A\u0645 \u0627\u0633\u062A\u064A\u0631\u0627\u062F ",
                    React.createElement("strong", { style: { color: "#10b981" } }, importTxt.split("\n").filter(l => l.trim()).length),
                    " \u0645\u062A\u062F\u0631\u0628"),
                React.createElement(Btn, { bg: "#10b981", full: true, onClick: () => {
                        const lines = importTxt.split("\n").filter(l => l.trim());
                        const imp = lines.map(line => {
                            const p = line.split(",");
                            if (p.length < 4)
                                return null;
                            const [name, sid, spec, level, cs] = p;
                            const codes = cs ? cs.split(";").map(c => c.trim()) : [];
                            const rem = courses.filter(c => codes.includes(c.code)).map(c => c.id);
                            return { name: name.trim(), sid: sid.trim(), spec: spec.trim(), level: +level.trim(), rem, _id: uid() };
                        }).filter(Boolean);
                        setTrainees(prev => [...prev, ...imp]);
                        setImportTxt("");
                        setModal(null);
                    } }, "\u0627\u0633\u062A\u064A\u0631\u0627\u062F")))));
    };
    // ── SCHEDULE BUILDER ──────────────────────────────────────
    const ScheduleTab = () => {
        var _a, _b;
        const col = spColor(selSpec);
        const coursesInLevel = lc(selSpec, selLv);
        const gs = getGroups(selSpec, selLv);
        const curGid = (selGroup && gs.find(g => g.id === selGroup)) ? selGroup : (((_a = gs[0]) === null || _a === void 0 ? void 0 : _a.id) || null);
        const sched = curGid ? getSched(selSpec, selLv, curGid) : [];
        const [newGroupName, setNewGroupName] = (0, React.useState)("");
        const [editingName, setEditingName] = (0, React.useState)(null); // gid being renamed
        return (React.createElement("div", null,
            warn && (React.createElement("div", { style: { background: warn.startsWith("✅") ? "#F0FDF4" : "#FEF2F2",
                    border: `1px solid ${warn.startsWith("✅") ? "#10B981" : "#EF4444"}`,
                    borderRadius: 16, padding: "10px 16px", marginBottom: 14,
                    color: warn.startsWith("✅") ? "#065F46" : "#991B1B",
                    fontSize: 13, display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.6 } },
                React.createElement("span", { style: { fontSize: 18, flexShrink: 0 } }, warn.startsWith("✅") ? "✅" : "🚫"),
                React.createElement("div", { style: { flex: 1 } },
                    warn.startsWith("✅") ? null : React.createElement("div", { style: { fontWeight: 700, marginBottom: 2 } }, "\u062A\u0646\u0628\u064A\u0647"),
                    React.createElement("div", { style: { fontSize: 12, whiteSpace: "pre-line" } }, warn)),
                React.createElement("button", { onClick: () => setWarn(null), style: { marginRight: "auto", background: "none", border: "none",
                        color: warn.startsWith("✅") ? "#10B981" : "#ef4444", cursor: "pointer", fontSize: 18, flexShrink: 0 } }, "\u00D7"))),
            React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 14, alignItems: "center", flexWrap: "wrap" } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u062C\u062F\u0627\u0648\u0644"),
                React.createElement(Btn, { onClick: () => setModal("periodSettings"), bg: "#C5CAE9", outline: true, sm: true }, "\u2699\uFE0F \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u062D\u0635\u0635"),
                React.createElement(Btn, { onClick: () => setModal("assignCourses"), bg: "#8b5cf6", outline: true, sm: true }, "\uD83D\uDCCB \u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646"),
                React.createElement("div", { style: { display: "flex", gap: 8, marginRight: "auto" } }, SPECIALIZATIONS.filter(s => !s.shared).map(s => (React.createElement("button", { key: s.id, onClick: () => { setSelSpec(s.id); setSelGroup(null); }, style: { padding: "6px 14px", borderRadius: 12, border: `1px solid ${s.color}55`,
                        background: selSpec === s.id ? s.color : "transparent", color: selSpec === s.id ? "#fff" : s.color, cursor: "pointer", fontSize: 12, fontWeight: 600 } }, s.name)))),
                React.createElement("div", { style: { display: "flex", gap: 5 } }, [1, 2, 3, 4, 5].map(l => (React.createElement("button", { key: l, onClick: () => { setSelLv(l); setSelGroup(null); }, style: { padding: "6px 12px", borderRadius: 12, border: "1px solid #2a3a55",
                        background: selLv === l ? "#C5CAE9" : "transparent", color: selLv === l ? "#004D40" : "#00695C", cursor: "pointer", fontSize: 12 } },
                    "\u0645",
                    l))))),
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 16, padding: "10px 14px", marginBottom: 14 } },
                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" } },
                    React.createElement("span", { style: { color: "#00695C", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" } }, "\uD83D\uDCCB \u0627\u0644\u0631\u0632\u0645:"),
                    gs.map(g => (React.createElement("div", { key: g.id, style: { display: "flex", alignItems: "center", gap: 0 } },
                        editingName === g.id ? (React.createElement("input", { autoFocus: true, value: g.name, onChange: e => renameGroup(selSpec, selLv, g.id, e.target.value), onBlur: () => setEditingName(null), onKeyDown: e => e.key === "Enter" && setEditingName(null), style: { background: "#FFFFFF", border: `1px solid ${col}`, borderRadius: "7px 0 0 7px",
                                padding: "5px 10px", color: "#1A1A2E", fontSize: 12, width: 100 } })) : (React.createElement("button", { onClick: () => { setSelGroup(g.id); }, onDoubleClick: () => setEditingName(g.id), title: "\u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0644\u0644\u062A\u0639\u062F\u064A\u0644", style: { padding: "5px 12px", borderRadius: gs.length > 1 ? "7px 0 0 7px" : 8,
                                border: `1px solid ${curGid === g.id ? col : "#00695C"}`,
                                background: curGid === g.id ? col + "22" : "transparent",
                                color: curGid === g.id ? col : "#00695C", cursor: "pointer", fontSize: 12, fontWeight: curGid === g.id ? 700 : 400 } },
                            g.name,
                            React.createElement("span", { style: { color: "#00695C", fontSize: 10, marginRight: 4 } },
                                "(",
                                getSched(selSpec, selLv, g.id).length,
                                "\u062D\u0635\u0629)"))),
                        gs.length > 1 && (React.createElement("button", { onClick: () => { if (window.confirm(`حذف "${g.name}"؟`))
                                removeGroup(selSpec, selLv, g.id); }, style: { padding: "5px 7px", borderRadius: "0 7px 7px 0", border: `1px solid #2a3a55`,
                                borderRight: "none", background: "#F5F5F5", color: "#ef4444", cursor: "pointer", fontSize: 12, lineHeight: 1 } }, "\u00D7"))))),
                    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 0, marginRight: 4 } },
                        React.createElement("input", { value: newGroupName, onChange: e => setNewGroupName(e.target.value), placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0631\u0632\u0645\u0629...", onKeyDown: e => {
                                if (e.key === "Enter" && newGroupName.trim()) {
                                    addGroup(selSpec, selLv, newGroupName.trim());
                                    setNewGroupName("");
                                }
                            }, style: { background: "#FFFFFF", border: "1px solid #334155", borderRadius: "7px 0 0 7px",
                                padding: "5px 10px", color: "#00695C", fontSize: 12, width: 110 } }),
                        React.createElement("button", { onClick: () => {
                                if (newGroupName.trim()) {
                                    addGroup(selSpec, selLv, newGroupName.trim());
                                    setNewGroupName("");
                                }
                                else {
                                    // Auto-name: رزمة 1، ب، ج...
                                    const names = ["أ", "ب", "ج", "د", "هـ", "و", "ز", "ح", "ط", "ي"];
                                    const name = "رزمة " + (gs.length + 1);
                                    addGroup(selSpec, selLv, name);
                                }
                            }, style: { padding: "5px 10px", borderRadius: "0 7px 7px 0", border: "1px solid #334155",
                                background: "#C5CAE9", color: "#283593", cursor: "pointer", fontSize: 12, fontWeight: 700 } }, "+ \u0631\u0632\u0645\u0629")),
                    gs.length === 0 && (React.createElement("span", { style: { color: "#00695C", fontSize: 11 } }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0631\u0632\u0645 \u2014 \u0623\u0636\u0641 \u0631\u0632\u0645\u0629 \u0644\u062A\u0628\u062F\u0623")),
                    curGid && sched.length > 0 && (React.createElement("button", { onClick: () => setSched(selSpec, selLv, curGid, []), style: { marginRight: "auto", padding: "5px 12px", borderRadius: 12, border: "1px solid #ef444455",
                            background: "none", color: "#ef4444", cursor: "pointer", fontSize: 11 } }, "\u0645\u0633\u062D \u062C\u062F\u0648\u0644 \u0647\u0630\u0647 \u0627\u0644\u0631\u0632\u0645\u0629"))),
                gs.length > 0 && (React.createElement("div", { style: { color: "#1A237E", fontSize: 10, marginTop: 6 } }, "\uD83D\uDCA1 \u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0639\u0644\u0649 \u0627\u0633\u0645 \u0627\u0644\u0631\u0632\u0645\u0629 \u0644\u062A\u0639\u062F\u064A\u0644\u0647")),
                curGid && coursesInLevel.length > 0 && (() => {
                    const issues = coursesInLevel.map(c => {
                        const sessions = sched.filter(s => s.courseId === c.id);
                        const theoryNeeded = c.L + c.T;
                        const practNeeded = c.P;
                        const scheduledTh = sessions.filter(s => {
                            const st = s.sessionType || (c.P === 0 ? "theory" : "practical");
                            return st === "theory" || c.P === 0;
                        }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                        const scheduledPr = sessions.filter(s => {
                            const st = s.sessionType || (c.L === 0 && c.T === 0 ? "practical" : "theory");
                            return st === "practical" || (c.L === 0 && c.T === 0);
                        }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                        const theoryOver = theoryNeeded > 0 && scheduledTh > theoryNeeded;
                        const practOver = practNeeded > 0 && scheduledPr > practNeeded;
                        const theoryDone = theoryNeeded === 0 || scheduledTh === theoryNeeded;
                        const practDone = practNeeded === 0 || scheduledPr === practNeeded;
                        return { c, scheduledTh, scheduledPr, theoryNeeded, practNeeded,
                            theoryOver, practOver, theoryDone, practDone,
                            allDone: theoryDone && practDone, anyOver: theoryOver || practOver,
                            hasAny: sessions.length > 0 };
                    });
                    const overCourses = issues.filter(x => x.anyOver);
                    const underCourses = issues.filter(x => !x.allDone && !x.anyOver && x.hasAny);
                    const zeroCourses = issues.filter(x => !x.hasAny);
                    const doneCourses = issues.filter(x => x.allDone && !x.anyOver && x.hasAny);
                    if (issues.every(x => !x.hasAny))
                        return null;
                    return (React.createElement("div", { style: { marginTop: 8, background: "#F5F5F5", border: "1px solid #E2E8F0", borderRadius: 16, padding: "10px 14px" } },
                        React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "flex-start" } },
                            React.createElement("span", { style: { color: "#00695C", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" } }, "\uD83D\uDCCA \u0645\u0644\u062E\u0635 \u0627\u0644\u0633\u0627\u0639\u0627\u062A:"),
                            doneCourses.length > 0 && (React.createElement("span", { style: { color: "#065F46", fontSize: 11 } },
                                "\u2705 \u0645\u0643\u062A\u0645\u0644 (",
                                doneCourses.length,
                                "):",
                                doneCourses.map(x => (React.createElement("span", { key: x.c.id, style: { background: "#D1FAE5", color: "#065F46", borderRadius: 4, padding: "1px 6px", margin: "0 3px", fontSize: 10, fontWeight: 700 } }, x.c.code))))),
                            underCourses.length > 0 && (React.createElement("span", { style: { color: "#92400E", fontSize: 11 } },
                                "\u26A0\uFE0F \u0646\u0627\u0642\u0635 (",
                                underCourses.length,
                                "):",
                                underCourses.map(x => (React.createElement("span", { key: x.c.id, title: `نظري: ${x.scheduledTh}/${x.theoryNeeded}س | عملي: ${x.scheduledPr}/${x.practNeeded}س`, style: { background: "#FEF3C7", color: "#92400E", borderRadius: 4, padding: "1px 6px", margin: "0 3px", fontSize: 10, fontWeight: 700, cursor: "help" } },
                                    x.c.code,
                                    x.theoryNeeded > 0 && !x.theoryDone && ` ن:${x.scheduledTh}/${x.theoryNeeded}`,
                                    x.practNeeded > 0 && !x.practDone && ` ع:${x.scheduledPr}/${x.practNeeded}`))))),
                            overCourses.length > 0 && (React.createElement("span", { style: { color: "#991B1B", fontSize: 11 } },
                                "\uD83D\uDEAB \u062A\u062C\u0627\u0648\u0632 (",
                                overCourses.length,
                                "):",
                                overCourses.map(x => (React.createElement("span", { key: x.c.id, title: `نظري: ${x.scheduledTh}/${x.theoryNeeded}س | عملي: ${x.scheduledPr}/${x.practNeeded}س`, style: { background: "#FEE2E2", color: "#991B1B", borderRadius: 4, padding: "1px 6px", margin: "0 3px", fontSize: 10, fontWeight: 700, cursor: "help" } },
                                    x.c.code,
                                    x.theoryOver && ` ن+${x.scheduledTh - x.theoryNeeded}س`,
                                    x.practOver && ` ع+${x.scheduledPr - x.practNeeded}س`))))),
                            zeroCourses.length > 0 && (React.createElement("span", { style: { color: "#00695C", fontSize: 11 } },
                                "\u2B1C \u0644\u0645 \u064A\u064F\u0648\u0632\u064E\u0651\u0639 (",
                                zeroCourses.length,
                                "):",
                                zeroCourses.map(x => (React.createElement("span", { key: x.c.id, style: { background: "#F5F5F5", color: "#00695C", borderRadius: 4, padding: "1px 6px", margin: "0 3px", fontSize: 10 } }, x.c.code))))))));
                })()),
            gs.length === 0 && (React.createElement("div", { style: { textAlign: "center", padding: "40px 20px", border: "1px dashed #1e2d45", borderRadius: 16, color: "#C5CAE9", marginBottom: 14 } },
                React.createElement("div", { style: { fontSize: 32, marginBottom: 10 } }, "\uD83D\uDCCB"),
                React.createElement("div", { style: { fontSize: 14, marginBottom: 14 } },
                    "\u0644\u0627 \u062A\u0648\u062C\u062F \u0631\u0632\u0645 \u0644\u0644\u0645\u0633\u062A\u0648\u0649 ",
                    selLv,
                    " \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u062A\u062E\u0635\u0635"),
                React.createElement(Btn, { onClick: () => { addGroup(selSpec, selLv, "رزمة 1"); }, bg: col }, "+ \u0625\u0636\u0627\u0641\u0629 \u0631\u0632\u0645\u0629 1"))),
            curGid && (React.createElement("div", { style: { display: "grid", gridTemplateColumns: "200px 1fr", gap: 14 } },
                React.createElement("div", { style: { background: "#F5F5F5", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 10, maxHeight: 720, overflowY: "auto" } },
                    React.createElement("div", { style: { color: "#00695C", fontSize: 11, fontWeight: 700, marginBottom: 8 } },
                        "\uD83D\uDDC2 \u0645\u0642\u0631\u0631\u0627\u062A \u0627\u0644\u0641\u0635\u0644 ",
                        selLv),
                    coursesInLevel.length === 0
                        ? React.createElement("div", { style: { color: "#00695C", fontSize: 11, textAlign: "center" } }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0642\u0631\u0631\u0627\u062A")
                        : coursesInLevel.map(c => {
                            const cc = c.spec === "gen" ? spColor("gen") : col;
                            const a = courseAssign[c.id] || {};
                            const tTr = trainers.find(x => x.id === a.theoryId);
                            const pTr = trainers.find(x => x.id === a.practicalId);
                            const theoryNeeded = c.L + c.T; // محاضرة + تمارين
                            const practNeeded = c.P; // عملي
                            // Sessions for this course in current group
                            const sessions = sched.filter(s => s.courseId === c.id);
                            // Theory sessions: sessionType==="theory" OR course has no practical
                            const theorySessions = sessions.filter(s => {
                                const st = s.sessionType || (c.P === 0 ? "theory" : "practical");
                                return st === "theory" || c.P === 0;
                            });
                            // Practical sessions: sessionType==="practical" OR course has no theory
                            const practSessions = sessions.filter(s => {
                                const st = s.sessionType || (c.L === 0 && c.T === 0 ? "practical" : "theory");
                                return st === "practical" || (c.L === 0 && c.T === 0);
                            });
                            const scheduledTheoryH = theorySessions.reduce((a, s) => a + (s.sessionHours || 1), 0);
                            const scheduledPractH = practSessions.reduce((a, s) => a + (s.sessionHours || 1), 0);
                            // Status per type
                            const theoryOver = theoryNeeded > 0 && scheduledTheoryH > theoryNeeded;
                            const practOver = practNeeded > 0 && scheduledPractH > practNeeded;
                            const theoryDone = theoryNeeded === 0 || scheduledTheoryH === theoryNeeded;
                            const practDone = practNeeded === 0 || scheduledPractH === practNeeded;
                            const allDone = theoryDone && practDone;
                            const anyOver = theoryOver || practOver;
                            return (React.createElement("div", { key: c.id, draggable: true, onDragStart: e => e.dataTransfer.setData("courseId", c.id), style: { background: anyOver ? "#FEF2F2" : allDone ? "#F0FDF4" : cc + "12",
                                    border: `1px solid ${anyOver ? "#EF4444" : allDone ? "#10B981" : cc + "44"}`,
                                    borderRadius: 12, padding: "7px 9px", cursor: "grab", marginBottom: 6, userSelect: "none" } },
                                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                                    React.createElement("span", { style: { color: anyOver ? "#991B1B" : allDone ? "#065F46" : cc, fontSize: 10, fontWeight: 700, fontFamily: "monospace" } }, c.code),
                                    React.createElement("span", { style: { background: anyOver ? "#EF4444" : allDone ? "#10B981" : "#C5CAE9",
                                            color: anyOver || allDone ? "#fff" : "#00695C",
                                            borderRadius: 8, padding: "1px 6px", fontSize: 9, fontWeight: 700 } },
                                        scheduledTheoryH + scheduledPractH,
                                        "/",
                                        c.CTH,
                                        "\u0633")),
                                React.createElement("div", { style: { color: "#004D40", fontSize: 10, marginTop: 2, lineHeight: 1.3, marginBottom: 4 } }, c.name),
                                theoryNeeded > 0 && (React.createElement("div", { style: { marginBottom: 3 } },
                                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 1 } },
                                        React.createElement("span", { style: { fontSize: 8, color: "#3949AB", fontWeight: 600 } }, "\u0646\u0638\u0631\u064A"),
                                        React.createElement("span", { style: { fontSize: 8, color: theoryOver ? "#EF4444" : theoryDone ? "#10B981" : "#00695C", fontWeight: 700 } },
                                            scheduledTheoryH,
                                            "/",
                                            theoryNeeded,
                                            "\u0633")),
                                    React.createElement("div", { style: { background: "#C5CAE9", borderRadius: 3, height: 5, overflow: "hidden" } },
                                        React.createElement("div", { style: { height: "100%", borderRadius: 3, transition: "width 0.3s",
                                                width: Math.min(100, scheduledTheoryH / theoryNeeded * 100) + "%",
                                                background: theoryOver ? "#EF4444" : theoryDone ? "#10B981" : "#3949AB" } })))),
                                practNeeded > 0 && (React.createElement("div", { style: { marginBottom: 4 } },
                                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 1 } },
                                        React.createElement("span", { style: { fontSize: 8, color: "#10B981", fontWeight: 600 } }, "\u0639\u0645\u0644\u064A"),
                                        React.createElement("span", { style: { fontSize: 8, color: practOver ? "#EF4444" : practDone ? "#10B981" : "#00695C", fontWeight: 700 } },
                                            scheduledPractH,
                                            "/",
                                            practNeeded,
                                            "\u0633")),
                                    React.createElement("div", { style: { background: "#D1FAE5", borderRadius: 3, height: 5, overflow: "hidden" } },
                                        React.createElement("div", { style: { height: "100%", borderRadius: 3, transition: "width 0.3s",
                                                width: Math.min(100, scheduledPractH / practNeeded * 100) + "%",
                                                background: practOver ? "#EF4444" : practDone ? "#10B981" : "#10B981" } })))),
                                anyOver && (React.createElement("div", { style: { color: "#991B1B", fontSize: 9, fontWeight: 700 } },
                                    theoryOver && `⚠️ نظري تجاوز: ${scheduledTheoryH}/${theoryNeeded}س  `,
                                    practOver && `⚠️ عملي تجاوز: ${scheduledPractH}/${practNeeded}س`)),
                                allDone && !anyOver && sessions.length > 0 && (React.createElement("div", { style: { color: "#065F46", fontSize: 9, fontWeight: 700 } }, "\u2705 \u0645\u0643\u062A\u0645\u0644")),
                                !allDone && !anyOver && sessions.length > 0 && (React.createElement("div", { style: { color: "#00695C", fontSize: 9 } },
                                    theoryNeeded > 0 && !theoryDone && `نظري متبقي: ${theoryNeeded - scheduledTheoryH}س  `,
                                    practNeeded > 0 && !practDone && `عملي متبقي: ${practNeeded - scheduledPractH}س`)),
                                (tTr || pTr) && (React.createElement("div", { style: { fontSize: 9, color: "#1A237E", lineHeight: 1.7, marginTop: 3, borderTop: "1px solid #E2E8F0", paddingTop: 3 } },
                                    tTr && React.createElement("div", null,
                                        "\uD83D\uDCD8 ",
                                        tTr.name),
                                    pTr && React.createElement("div", null,
                                        "\uD83D\uDD27 ",
                                        pTr.name))),
                                (() => {
                                    const otherGroups = getAllGroupsForCourse(c.id, selSpec, selLv, curGid);
                                    if (!otherGroups.length)
                                        return null;
                                    return (React.createElement("div", { style: { marginTop: 4, background: "#FFFBEB", border: "1px solid #F59E0B",
                                            borderRadius: 8, padding: "4px 6px" } },
                                        React.createElement("div", { style: { color: "#92400E", fontSize: 8, fontWeight: 700, marginBottom: 3 } }, "\uD83D\uDD17 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0631\u0631 \u0641\u064A \u0631\u0632\u0645 \u0623\u062E\u0631\u0649:"),
                                        otherGroups.map((g, i) => (React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between",
                                                alignItems: "center", marginBottom: 2 } },
                                            React.createElement("span", { style: { color: "#92400E", fontSize: 8 } }, g.label),
                                            React.createElement("span", { style: { background: "#F59E0B", color: "#fff", borderRadius: 3,
                                                    padding: "0 4px", fontSize: 8, fontWeight: 700 } },
                                                g.count,
                                                "\u062D\u0635\u0629"))))));
                                })()));
                        }),
                    React.createElement("div", { style: { marginTop: 10, padding: 8, background: "#E8EAF6", border: "1px solid #BFDBFE", borderRadius: 12, fontSize: 10, color: "#1E40AF", lineHeight: 2 } },
                        React.createElement("strong", null, "\u0627\u0633\u062D\u0628 \u0627\u0644\u0645\u0642\u0631\u0631"),
                        " \u0648\u0623\u0641\u0644\u062A\u0647 \u0641\u064A \u0627\u0644\u062C\u062F\u0648\u0644",
                        React.createElement("br", null),
                        "\u062B\u0645 \u062D\u062F\u062F \u0639\u062F\u062F \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u062C\u0644\u0633\u0629 (1-4)",
                        React.createElement("br", null),
                        "\uD83D\uDCD8 \u0646\u0638\u0631\u064A: max 3 \u0645\u062A\u062A\u0627\u0644\u064A\u0629",
                        React.createElement("br", null),
                        "\uD83D\uDD27 \u0639\u0645\u0644\u064A: max 4 \u0645\u062A\u062A\u0627\u0644\u064A\u0629",
                        React.createElement("br", null),
                        "\uD83D\uDFE9 \u0623\u062E\u0636\u0631 = \u0645\u0643\u062A\u0645\u0644 | \uD83D\uDFE5 \u0623\u062D\u0645\u0631 = \u062A\u062C\u0627\u0648\u0632")),
                React.createElement("div", { style: { overflowX: "auto" } },
                    React.createElement("div", { style: { background: "#FFFFFF", border: `1px solid ${col}55`, borderRadius: 20, padding: 10 } },
                        React.createElement("div", { style: { color: "#00695C", fontSize: 12, fontWeight: 700, marginBottom: 8 } },
                            "\uD83D\uDCC5 ",
                            spName(selSpec),
                            " \u2014 \u0627\u0644\u0641\u0635\u0644 ",
                            selLv,
                            " \u2014",
                            React.createElement("span", { style: { color: col, marginRight: 4 } }, (_b = gs.find(g => g.id === curGid)) === null || _b === void 0 ? void 0 : _b.name),
                            React.createElement("span", { style: { color: "#C5CAE9", marginRight: 8 } },
                                "(",
                                sched.length,
                                " \u062D\u0635\u0629)")),
                        React.createElement("table", { style: { borderCollapse: "collapse", width: "100%" } },
                            React.createElement("thead", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { style: { background: "#FFFFFF", color: "#00695C", padding: "7px 8px",
                                            border: "1px solid #1e2d45", minWidth: 88, fontSize: 11 } }, "\u0627\u0644\u062D\u0635\u0629 / \u0627\u0644\u0648\u0642\u062A"),
                                    DAYS.map(d => (React.createElement("th", { key: d, style: { background: col + "1a", color: col, padding: "7px 8px",
                                            border: "1px solid #1e2d45", minWidth: 155, textAlign: "center", fontSize: 12 } }, d))))),
                            React.createElement("tbody", null, (() => {
                                const builderCovered = new Set();
                                sched.forEach(cell => {
                                    const h = cell.sessionHours || 1;
                                    if (h > 1)
                                        for (let i = 1; i < h; i++)
                                            builderCovered.add(`${cell.day}-${cell.period + i}`);
                                });
                                return periods.map(pr => {
                                    const rowCells = DAYS.map(day => {
                                        if (builderCovered.has(`${day}-${pr.id}`))
                                            return null;
                                        const cell = sched.find(s => s.day === day && s.period === pr.id);
                                        const sessionH = (cell === null || cell === void 0 ? void 0 : cell.sessionHours) || 1;
                                        const cellConflicts = cell ? (() => {
                                            const msgs = [];
                                            const famId = cell.sourceId || (!cell.isSharedCopy ? cell.id : null);
                                            [cell.theoryTrainerId, cell.practicalTrainerId].filter(Boolean).forEach(tid => {
                                                const r = checkTrainerConflict(tid, cell.day, cell.period, cell.id, famId);
                                                if (r)
                                                    msgs.push(r);
                                            });
                                            if (cell.hallId) {
                                                const r = checkHallConflict(cell.hallId, cell.day, cell.period, cell.id, famId);
                                                if (r)
                                                    msgs.push(r);
                                            }
                                            return msgs;
                                        })() : [];
                                        const cForStyle = cell ? courses.find(x => x.id === cell.courseId) : null;
                                        const stForStyle = cell ? (cell.sessionType || ((cForStyle === null || cForStyle === void 0 ? void 0 : cForStyle.P) === 0 ? "theory" : "practical")) : null;
                                        const isTheoryCell = stForStyle === "theory" || (cForStyle && cForStyle.P === 0);
                                        const borderCol = cellConflicts.length ? "#EF4444" : cell ? (isTheoryCell ? "#C5CAE9" : "#6EE7B7") : "#C5CAE9";
                                        const bgCol = cellConflicts.length ? "#FEF2F2" : cell ? (isTheoryCell ? "#E8EAF6" : "#F0FDF4") : "#F5F5F5";
                                        return (React.createElement("td", { key: day, rowSpan: sessionH, onDragOver: e => e.preventDefault(), onDrop: e => { setSelGroup(curGid); handleDrop(e, day, pr.id, selSpec, selLv, curGid); }, style: {
                                                border: `3px solid ${borderCol}`,
                                                background: bgCol,
                                                padding: cell ? 0 : 3,
                                                verticalAlign: "top",
                                                minWidth: 148,
                                            } }, cell && (React.createElement("div", { style: { height: "100%", padding: 3 } },
                                            React.createElement(SchedCell, { cell: cell, courses: courses, trainers: trainers, halls: halls, spColor: spColor, mainSpec: selSpec, sched: sched, periods: periods, conflicts: cellConflicts, sharedWith: getSharedWith(cell, selSpec, selLv, curGid), allGroups: allAvailGroups(cell, selSpec, selLv, curGid), onAddShared: (keys) => addSharedCopies(cell, selSpec, selLv, curGid, keys), onRemove: () => {
                                                    // Remove this cell from current group
                                                    setSched(selSpec, selLv, curGid, p => p.filter(s => s.id !== cell.id));
                                                    // If this is a source cell, offer to remove shared copies too
                                                    const isSource = !cell.isSharedCopy && cell.sourceId === cell.id;
                                                    if (isSource) {
                                                        // Remove all shared copies across all specs/groups
                                                        setScheds(prev => {
                                                            const next = JSON.parse(JSON.stringify(prev));
                                                            Object.keys(next).forEach(sp => Object.keys(next[sp] || {}).forEach(lv => Object.keys(next[sp][lv] || {}).forEach(gid => {
                                                                next[sp][lv][gid] = (next[sp][lv][gid] || [])
                                                                    .filter(c => c.sourceId !== cell.id);
                                                            })));
                                                            return next;
                                                        });
                                                    }
                                                }, onUpdate: upd => handleCellUpdate(selSpec, selLv, curGid, cell.id, upd) })))));
                                    });
                                    return (React.createElement(React.Fragment, null,
                                        React.createElement("tr", { key: pr.id },
                                            React.createElement("td", { style: { background: "#E8EAF6", padding: "4px 6px", border: "1px solid #E2E8F0", verticalAlign: "middle", minWidth: 88 } },
                                                React.createElement("div", { style: { textAlign: "center" } },
                                                    React.createElement("div", { style: { color: "#283593", fontWeight: 700, fontSize: 12 } },
                                                        "\u0627\u0644\u062D\u0635\u0629 ",
                                                        pr.label),
                                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9, direction: "ltr" } }, pr.start),
                                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9, direction: "ltr" } }, pr.end))),
                                            rowCells),
                                        pr.breakAfter && (React.createElement("tr", { key: `br-${pr.id}` },
                                            React.createElement("td", { colSpan: 6, style: { background: "#ECFDF5", border: "1px solid #A7F3D0", padding: "4px 14px" } },
                                                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                                    React.createElement("span", { style: { color: "#065F46", fontSize: 10 } },
                                                        "\uD83D\uDD4C ",
                                                        pr.breakAfter.label),
                                                    React.createElement("span", { style: { color: "#065F46", fontSize: 10, direction: "ltr" } },
                                                        pr.breakAfter.from,
                                                        "\u2013",
                                                        pr.breakAfter.to,
                                                        " (",
                                                        pr.breakAfter.dur,
                                                        "\u062F)")))))));
                                });
                            })())))))),
            modal === "periodSettings" && React.createElement(PeriodSettingsModal, { periods: periods, setPeriods: setPeriods, onClose: () => setModal(null) }),
            modal === "assignCourses" && (React.createElement(CourseAssignModal, { courses: courses, trainers: trainers, assignments: courseAssign, setAssignments: setCourseAssign, onClose: () => setModal(null) }))));
    };
    // ── STATISTICS TAB ────────────────────────────────────────
    const StatsTab = () => {
        const [filterSpec, setFilterSpec] = (0, React.useState)("all");
        // ── Helpers ──────────────────────────────────────────────
        const allCells = () => Object.entries(scheds).flatMap(([sp, ls]) => Object.entries(ls || {}).flatMap(([lv, lvGroups]) => Object.entries(lvGroups || {}).flatMap(([gid, cells]) => cells.map(c => (Object.assign(Object.assign({}, c), { spec: sp, level: +lv, gid }))))));
        const specCells = (sp) => allCells().filter(c => sp === "all" || c.spec === sp);
        const getGroups2 = (sp, lv) => (groups[sp] && groups[sp][lv]) || [];
        // ── Course completion per spec/level/group ────────────────
        const courseStats = (sp) => {
            const spCourses = courses.filter(c => !c.coop && (sp === "all" || c.spec === sp || c.spec === "gen"));
            const specs = sp === "all" ? ["net", "auto"] : ([sp]);
            return specs.flatMap(specId => {
                const lvls = [1, 2, 3, 4, 5];
                return lvls.flatMap(lv => {
                    const lvCourses = courses.filter(c => !c.coop && (c.spec === specId || c.spec === "gen") && c.level === lv);
                    if (!lvCourses.length)
                        return [];
                    const gs = getGroups2(specId, lv);
                    return gs.map(g => {
                        const cells = (scheds[specId] && scheds[specId][lv] && scheds[specId][lv][g.id]) || [];
                        const courseResults = lvCourses.map(c => {
                            const sessions = cells.filter(s => s.courseId === c.id);
                            const theoryNeeded = c.L + c.T, practNeeded = c.P;
                            const scheduledTh = sessions.filter(s => {
                                const st = s.sessionType || (c.P === 0 ? "theory" : "practical");
                                return st === "theory" || c.P === 0;
                            }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                            const scheduledPr = sessions.filter(s => {
                                const st = s.sessionType || (c.L === 0 && c.T === 0 ? "practical" : "theory");
                                return st === "practical" || (c.L === 0 && c.T === 0);
                            }).reduce((a, s) => a + (s.sessionHours || 1), 0);
                            const thDone = theoryNeeded === 0 || scheduledTh === theoryNeeded;
                            const prDone = practNeeded === 0 || scheduledPr === practNeeded;
                            const thOver = theoryNeeded > 0 && scheduledTh > theoryNeeded;
                            const prOver = practNeeded > 0 && scheduledPr > practNeeded;
                            return { c, scheduledTh, scheduledPr, theoryNeeded, practNeeded,
                                done: thDone && prDone, over: thOver || prOver, partial: sessions.length > 0 && !(thDone && prDone) && !thOver && !prOver, empty: sessions.length === 0 };
                        });
                        return { specId, lv, g, courseResults };
                    });
                });
            });
        };
        // ── Trainer load ──────────────────────────────────────────
        const trainerLoad = trainers.map(t => {
            const allCellsT = allCells().filter(c => c.theoryTrainerId === t.id || c.practicalTrainerId === t.id);
            // Only count source cells (not shared copies) for hours
            const srcCells = allCellsT.filter(c => !c.isSharedCopy);
            const thH = srcCells.filter(c => c.theoryTrainerId === t.id).reduce((a, s) => a + (s.sessionHours || 1), 0);
            const prH = srcCells.filter(c => c.practicalTrainerId === t.id).reduce((a, s) => a + (s.sessionHours || 1), 0);
            const total = srcCells.reduce((a, s) => a + (s.sessionHours || 1), 0);
            return { t, thH, prH, total, pct: Math.min(100, t.maxH > 0 ? total / t.maxH * 100 : 0), over: total > t.maxH };
        });
        // ── Hall usage ────────────────────────────────────────────
        const hallUsage = halls.map(h => {
            const cells = allCells().filter(c => c.hallId === h.id);
            const totalPeriods = periods.length * DAYS.length;
            const usedPeriods = cells.length;
            return { h, usedPeriods, totalPeriods, pct: Math.round(usedPeriods / totalPeriods * 100) };
        });
        // ── Overall completion ────────────────────────────────────
        const stats = courseStats(filterSpec === "all" ? "all" : filterSpec);
        const allCourseRes = stats.flatMap(s => s.courseResults);
        const totalCourses = allCourseRes.length;
        const doneCourses = allCourseRes.filter(x => x.done).length;
        const overCourses = allCourseRes.filter(x => x.over).length;
        const partCourses = allCourseRes.filter(x => x.partial).length;
        const emptyCourses = allCourseRes.filter(x => x.empty).length;
        const completePct = totalCourses > 0 ? Math.round(doneCourses / totalCourses * 100) : 0;
        // ── Stat card ─────────────────────────────────────────────
        const StatCard = ({ icon, label, value, sub, color, onClick, active }) => (React.createElement("div", { onClick: onClick, style: { background: active ? color + "22" : "#FFFFFF", border: `2px solid ${active ? color : color + "44"}`,
                borderRadius: 20, padding: "16px 18px", cursor: onClick ? "pointer" : "default", transition: "all 0.15s" } },
            React.createElement("div", { style: { fontSize: 24, marginBottom: 6 } }, icon),
            React.createElement("div", { style: { color, fontSize: 26, fontWeight: 800 } }, value),
            React.createElement("div", { style: { color: "#00695C", fontSize: 12, fontWeight: 600 } }, label),
            sub && React.createElement("div", { style: { color: "#00695C", fontSize: 11, marginTop: 2 } }, sub)));
        // ── Progress bar ──────────────────────────────────────────
        const ProgressBar = ({ value, max, color, height = 8 }) => (React.createElement("div", { style: { background: "#C5CAE9", borderRadius: 149, height, overflow: "hidden" } },
            React.createElement("div", { style: { height: "100%", borderRadius: 149, width: Math.min(100, max > 0 ? value / max * 100 : 0) + "%",
                    background: color, transition: "width 0.4s" } })));
        const StatusBadge = ({ done, over, partial, empty }) => {
            if (over)
                return React.createElement("span", { style: { background: "#FEE2E2", color: "#991B1B", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } }, "\uD83D\uDEAB \u062A\u062C\u0627\u0648\u0632");
            if (done)
                return React.createElement("span", { style: { background: "#D1FAE5", color: "#065F46", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } }, "\u2705 \u0645\u0643\u062A\u0645\u0644");
            if (partial)
                return React.createElement("span", { style: { background: "#FEF3C7", color: "#92400E", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } }, "\u26A0\uFE0F \u0646\u0627\u0642\u0635");
            return React.createElement("span", { style: { background: "#F5F5F5", color: "#00695C", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } }, "\u2B1C \u0644\u0645 \u064A\u064F\u0648\u0632\u064E\u0651\u0639");
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18, marginLeft: "auto" } }, "\uD83D\uDCC8 \u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A \u0648\u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"),
                [{ id: "all", name: "الكل", color: "#00695C" }, ...SPECIALIZATIONS.filter(s => !s.shared)].map(s => (React.createElement("button", { key: s.id, onClick: () => setFilterSpec(s.id), style: { padding: "6px 14px", borderRadius: 12, border: `1px solid ${s.color}55`,
                        background: filterSpec === s.id ? s.color : "transparent",
                        color: filterSpec === s.id ? "#fff" : s.color, cursor: "pointer", fontSize: 12, fontWeight: 600 } }, s.name)))),
            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(140px,1fr))", gap: 12, marginBottom: 20 } },
                React.createElement(StatCard, { icon: "\uD83D\uDCCB", label: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062C\u062F\u0627\u0648\u0644", value: stats.length, color: "#0EA5E9", sub: `${stats.filter(s => s.courseResults.every(x => x.done)).length} مكتمل` }),
                React.createElement(StatCard, { icon: "\u2705", label: "\u0645\u0642\u0631\u0631\u0627\u062A \u0645\u0643\u062A\u0645\u0644\u0629", value: doneCourses, color: "#10B981", sub: `${completePct}% من الإجمالي` }),
                React.createElement(StatCard, { icon: "\u26A0\uFE0F", label: "\u0645\u0642\u0631\u0631\u0627\u062A \u0646\u0627\u0642\u0635\u0629", value: partCourses, color: "#F59E0B", sub: "\u0633\u0627\u0639\u0627\u062A \u063A\u064A\u0631 \u0645\u0643\u062A\u0645\u0644\u0629" }),
                React.createElement(StatCard, { icon: "\uD83D\uDEAB", label: "\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0627\u0639\u0627\u062A", value: overCourses, color: "#EF4444", sub: "\u062A\u062D\u062A\u0627\u062C \u0645\u0631\u0627\u062C\u0639\u0629" }),
                React.createElement(StatCard, { icon: "\u2B1C", label: "\u0644\u0645 \u062A\u064F\u0648\u0632\u064E\u0651\u0639", value: emptyCourses, color: "#00695C", sub: "\u0644\u0645 \u062A\u064F\u0636\u064E\u0641 \u0644\u0644\u062C\u062F\u0648\u0644" })),
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 18, marginBottom: 20 } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 } },
                    React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 700, fontSize: 14 } }, "\u0646\u0633\u0628\u0629 \u0627\u0643\u062A\u0645\u0627\u0644 \u0627\u0644\u062C\u062F\u0627\u0648\u0644"),
                    React.createElement("div", { style: { color: completePct === 100 ? "#10B981" : completePct > 60 ? "#F59E0B" : "#EF4444",
                            fontWeight: 800, fontSize: 22 } },
                        completePct,
                        "%")),
                React.createElement(ProgressBar, { value: doneCourses, max: totalCourses, color: completePct === 100 ? "#10B981" : completePct > 60 ? "#F59E0B" : "#EF4444", height: 12 }),
                React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" } }, [
                    { label: "مكتمل", v: doneCourses, color: "#10B981" },
                    { label: "ناقص", v: partCourses, color: "#F59E0B" },
                    { label: "تجاوز", v: overCourses, color: "#EF4444" },
                    { label: "فارغ", v: emptyCourses, color: "#1A237E" },
                ].map(x => (React.createElement("div", { key: x.label, style: { display: "flex", alignItems: "center", gap: 6 } },
                    React.createElement("div", { style: { width: 10, height: 10, borderRadius: 2, background: x.color } }),
                    React.createElement("span", { style: { color: "#00695C", fontSize: 12 } },
                        x.label,
                        ": ",
                        React.createElement("strong", null, x.v))))))),
            React.createElement("div", { style: { marginBottom: 20 } },
                React.createElement("h3", { style: { color: "#1A1A2E", fontSize: 14, fontWeight: 700, marginBottom: 12 } }, "\uD83D\uDCCB \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A \u0644\u0643\u0644 \u0631\u0632\u0645\u0629"),
                stats.map(({ specId, lv, g, courseResults }) => {
                    const done = courseResults.filter(x => x.done).length;
                    const total = courseResults.length;
                    const pct = total > 0 ? Math.round(done / total * 100) : 0;
                    const sc = spColor(specId);
                    return (React.createElement("div", { key: `${specId}-${lv}-${g.id}`, style: { background: "#FFFFFF", border: `1px solid ${sc}33`, borderRadius: 16, padding: 16, marginBottom: 12 } },
                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 } },
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                React.createElement(Badge, { color: sc }, spName(specId)),
                                React.createElement("span", { style: { color: "#00695C", fontWeight: 700 } },
                                    "\u0627\u0644\u0641\u0635\u0644 ",
                                    lv),
                                React.createElement("span", { style: { color: sc, fontWeight: 700 } },
                                    "\u2014 ",
                                    g.name)),
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
                                React.createElement("span", { style: { color: pct === 100 ? "#10B981" : pct > 60 ? "#F59E0B" : "#EF4444", fontWeight: 800, fontSize: 16 } },
                                    pct,
                                    "%"),
                                React.createElement("span", { style: { color: "#00695C", fontSize: 12 } },
                                    done,
                                    "/",
                                    total))),
                        React.createElement(ProgressBar, { value: done, max: total, color: pct === 100 ? "#10B981" : pct > 60 ? "#F59E0B" : "#EF4444", height: 6 }),
                        React.createElement("div", { style: { marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 } }, courseResults.map(({ c, scheduledTh, scheduledPr, theoryNeeded, practNeeded, done, over, partial, empty }) => (React.createElement("div", { key: c.id, style: {
                                background: over ? "#FEF2F2" : done ? "#F0FDF4" : partial ? "#FFFBEB" : "#F5F5F5",
                                border: `1px solid ${over ? "#EF4444" : done ? "#10B981" : partial ? "#F59E0B" : "#C5CAE9"}`,
                                borderRadius: 12, padding: "6px 10px", minWidth: 120
                            } },
                            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 } },
                                React.createElement("span", { style: { color: spColor(c.spec), fontWeight: 700, fontSize: 10, fontFamily: "monospace" } }, c.code),
                                React.createElement(StatusBadge, { done: done, over: over, partial: partial, empty: empty })),
                            React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginBottom: 4 } }, c.name),
                            React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" } },
                                theoryNeeded > 0 && (React.createElement("span", { style: { fontSize: 9, color: scheduledTh === theoryNeeded ? "#065F46" : scheduledTh > theoryNeeded ? "#991B1B" : "#92400E",
                                        background: scheduledTh === theoryNeeded ? "#D1FAE5" : scheduledTh > theoryNeeded ? "#FEE2E2" : "#FEF3C7",
                                        borderRadius: 4, padding: "1px 5px", fontWeight: 600 } },
                                    "\u0646:",
                                    scheduledTh,
                                    "/",
                                    theoryNeeded,
                                    "\u0633")),
                                practNeeded > 0 && (React.createElement("span", { style: { fontSize: 9, color: scheduledPr === practNeeded ? "#065F46" : scheduledPr > practNeeded ? "#991B1B" : "#92400E",
                                        background: scheduledPr === practNeeded ? "#D1FAE5" : scheduledPr > practNeeded ? "#FEE2E2" : "#FEF3C7",
                                        borderRadius: 4, padding: "1px 5px", fontWeight: 600 } },
                                    "\u0639:",
                                    scheduledPr,
                                    "/",
                                    practNeeded,
                                    "\u0633")))))))));
                }),
                stats.length === 0 && (React.createElement("div", { style: { textAlign: "center", padding: "30px", color: "#00695C", border: "1px dashed #E2E8F0", borderRadius: 16 } }, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0631\u0632\u0645 \u0628\u0639\u062F \u2014 \u0623\u0636\u0641 \u0631\u0632\u0645\u0629 \u0648\u0627\u0628\u062F\u0623 \u0628\u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A"))),
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 18, marginBottom: 20 } },
                React.createElement("h3", { style: { color: "#1A1A2E", fontSize: 14, fontWeight: 700, marginBottom: 14 } }, "\uD83D\uDC68\u200D\uD83C\uDFEB \u062D\u0645\u0644 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646"),
                trainerLoad.length === 0
                    ? React.createElement("div", { style: { color: "#00695C", fontSize: 13 } }, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u062F\u0631\u0628\u0648\u0646")
                    : trainerLoad.map(({ t, thH, prH, total, pct, over }) => (React.createElement("div", { key: t.id, style: { marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid #F1F5F9" } },
                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 } },
                            React.createElement("div", null,
                                React.createElement("span", { style: { color: "#1A1A2E", fontWeight: 700, fontSize: 13 } }, t.name),
                                React.createElement("span", { style: { color: "#00695C", fontSize: 11, marginRight: 8 } },
                                    "(",
                                    total,
                                    "/",
                                    t.maxH,
                                    "\u0633 \u2014 \u0646\u0638\u0631\u064A:",
                                    thH,
                                    "\u0633 \u0639\u0645\u0644\u064A:",
                                    prH,
                                    "\u0633)")),
                            React.createElement("span", { style: { color: over ? "#EF4444" : pct > 80 ? "#F59E0B" : "#10B981", fontWeight: 800, fontSize: 14 } },
                                Math.round(pct),
                                "%")),
                        React.createElement(ProgressBar, { value: total, max: t.maxH, color: over ? "#EF4444" : pct > 80 ? "#F59E0B" : "#10B981" }),
                        over && React.createElement("div", { style: { color: "#EF4444", fontSize: 11, marginTop: 4 } },
                            "\u26A0\uFE0F \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u062D\u062F \u0627\u0644\u0623\u0642\u0635\u0649 \u0628\u0640 ",
                            total - t.maxH,
                            " \u0633\u0627\u0639\u0629"))))),
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 18, marginBottom: 20 } },
                React.createElement("h3", { style: { color: "#1A1A2E", fontSize: 14, fontWeight: 700, marginBottom: 14 } }, "\uD83C\uDFDB \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0642\u0627\u0639\u0627\u062A"),
                hallUsage.map(({ h, usedPeriods, totalPeriods, pct }) => (React.createElement("div", { key: h.id, style: { marginBottom: 12 } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 4 } },
                        React.createElement("div", null,
                            React.createElement("span", { style: { color: "#1A1A2E", fontWeight: 600 } }, h.name),
                            React.createElement(Badge, { color: h.type === "theory" ? "#3949AB" : "#10B981", style: { marginRight: 6 } }, h.type === "theory" ? "نظري" : "عملي"),
                            React.createElement("span", { style: { color: "#00695C", fontSize: 11, marginRight: 6 } },
                                "\u0633\u0639\u0629: ",
                                h.cap,
                                " | \u0645\u062D\u062C\u0648\u0632: ",
                                usedPeriods,
                                " \u062D\u0635\u0629")),
                        React.createElement("span", { style: { color: pct > 80 ? "#EF4444" : pct > 50 ? "#F59E0B" : "#10B981", fontWeight: 700 } },
                            pct,
                            "%")),
                    React.createElement(ProgressBar, { value: usedPeriods, max: totalPeriods, color: pct > 80 ? "#EF4444" : pct > 50 ? "#F59E0B" : "#3949AB" }))))),
            React.createElement("div", { style: { background: "linear-gradient(135deg,#1E3A5F,#1D4ED8)", borderRadius: 20, padding: 20, marginBottom: 20 } },
                React.createElement("h3", { style: { color: "#FFFFFF", fontSize: 15, fontWeight: 700, marginBottom: 16 } }, "\uD83D\uDCC4 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0646\u0647\u0627\u0626\u064A"),
                React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 } }, [
                    { l: "نسبة اكتمال الجداول", v: `${completePct}%`, ok: completePct === 100 },
                    { l: "مقررات مكتملة", v: `${doneCourses}/${totalCourses}`, ok: doneCourses === totalCourses },
                    { l: "مقررات تجاوزت الساعات", v: overCourses, ok: overCourses === 0 },
                    { l: "مقررات لم تُوزَّع", v: emptyCourses, ok: emptyCourses === 0 },
                    { l: "مدربون تجاوزوا الحد", v: trainerLoad.filter(x => x.over).length, ok: trainerLoad.filter(x => x.over).length === 0 },
                    { l: "قاعات غير مستخدمة", v: hallUsage.filter(x => x.usedPeriods === 0).length, ok: true },
                ].map(item => (React.createElement("div", { key: item.l, style: { background: "#ffffff18", borderRadius: 16, padding: "10px 14px",
                        border: `1px solid ${item.ok ? "#10B98155" : "#EF444455"}` } },
                    React.createElement("div", { style: { color: item.ok ? "#6EE7B7" : "#FCA5A5", fontSize: 10, marginBottom: 3 } }, item.l),
                    React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 800, fontSize: 18 } }, item.v),
                    React.createElement("div", { style: { fontSize: 14 } }, item.ok ? "✅" : "⚠️"))))),
                React.createElement("div", { style: { marginTop: 16, padding: "10px 14px", background: "#ffffff15", borderRadius: 16, color: "#1A237E", fontSize: 12, lineHeight: 2 } }, completePct === 100 && overCourses === 0 && trainerLoad.filter(x => x.over).length === 0
                    ? "🎉 ممتاز! جميع الجداول مكتملة وجاهزة للتطبيق."
                    : [
                        overCourses > 0 && `• يوجد ${overCourses} مقرر تجاوز الساعات المحددة`,
                        emptyCourses > 0 && `• يوجد ${emptyCourses} مقرر لم يُوزَّع بعد`,
                        partCourses > 0 && `• يوجد ${partCourses} مقرر ساعاته ناقصة`,
                        trainerLoad.filter(x => x.over).length > 0 && `• يوجد ${trainerLoad.filter(x => x.over).length} مدرب تجاوز الحد الأقصى للساعات`,
                    ].filter(Boolean).join(" | ")))));
    };
    // ── VIEW SCHEDULES ────────────────────────────────────────
    const ViewTab = () => {
        const col = spColor(viewSpec);
        // For trainees view: only current spec
        const allC = Object.entries(scheds[viewSpec] || {}).flatMap(([lv, lvGroups]) => Object.entries(lvGroups || {}).flatMap(([gid, cells]) => {
            var _a;
            const gName = ((_a = (groups[viewSpec] && groups[viewSpec][+lv] || []).find(g => g.id === gid)) === null || _a === void 0 ? void 0 : _a.name) || gid;
            return cells.map(c => (Object.assign(Object.assign({}, c), { level: +lv, gid, gName, spec: viewSpec })));
        }));
        // For trainers/halls view: ALL specs combined
        const allCrossSpec = Object.entries(scheds).flatMap(([sp, ls]) => Object.entries(ls || {}).flatMap(([lv, lvGroups]) => Object.entries(lvGroups || {}).flatMap(([gid, cells]) => {
            var _a;
            const gName = ((_a = (groups[sp] && groups[sp][+lv] || []).find(g => g.id === gid)) === null || _a === void 0 ? void 0 : _a.name) || gid;
            const spLabel = spName(sp);
            return cells.map(c => (Object.assign(Object.assign({}, c), { level: +lv, gid, gName, spec: sp, spLabel })));
        })));
        const GridTable = ({ cells, color, showSpec }) => {
            const coveredSlots = new Set();
            cells.forEach(cell => {
                const h = cell.sessionHours || 1;
                if (h > 1) {
                    for (let i = 1; i < h; i++)
                        coveredSlots.add(`${cell.day}-${cell.period + i}`);
                }
            });
            return (React.createElement("div", { style: { overflowX: "auto", background: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 11, padding: 9 } },
                React.createElement("table", { style: { borderCollapse: "collapse", fontSize: 11, width: "100%" } },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", { style: { background: "#F5F5F5", color: "#00695C", padding: "6px 8px", border: "1px solid #E2E8F0", minWidth: 88, fontSize: 10 } }, "\u0627\u0644\u062D\u0635\u0629 / \u0627\u0644\u0648\u0642\u062A"),
                            DAYS.map(d => React.createElement("th", { key: d, style: { background: color + "1a", color, padding: "6px 8px", border: "1px solid #E2E8F0", minWidth: 150, textAlign: "center" } }, d)))),
                    React.createElement("tbody", null, periods.map(pr => {
                        const rowCells = DAYS.map(day => {
                            var _a;
                            if (coveredSlots.has(`${day}-${pr.id}`))
                                return null;
                            const cell = cells.find(c => c.day === day && c.period === pr.id);
                            const crs = cell ? courses.find(c => c.id === cell.courseId) : null;
                            const tTr = cell ? trainers.find(t => t.id === cell.theoryTrainerId) : null;
                            const pTr = cell ? trainers.find(t => t.id === cell.practicalTrainerId) : null;
                            const hl = cell ? halls.find(h => h.id === cell.hallId) : null;
                            const cc = showSpec
                                ? (crs ? spColor(cell.spec || crs.spec || "gen") : color)
                                : (crs ? (crs.spec === "gen" ? spColor("gen") : color) : color);
                            const sessionType = (cell === null || cell === void 0 ? void 0 : cell.sessionType) || ((crs === null || crs === void 0 ? void 0 : crs.P) === 0 ? "theory" : "practical");
                            const isTheory = sessionType === "theory" || (crs && crs.P === 0);
                            const sessionH = (cell === null || cell === void 0 ? void 0 : cell.sessionHours) || 1;
                            const showTr = isTheory ? tTr : pTr;
                            return (React.createElement("td", { key: day, rowSpan: sessionH, style: { border: `3px solid ${crs ? (isTheory ? "#C5CAE9" : "#6EE7B7") : "#C5CAE9"}`,
                                    background: crs ? (isTheory ? "#E8EAF6" : "#ECFDF5") : "#F5F5F5",
                                    padding: "8px 10px", verticalAlign: "top" } }, crs && (React.createElement("div", null,
                                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 } },
                                    React.createElement("span", { style: { background: isTheory ? "#3949AB" : "#10B981", color: "#fff", borderRadius: 8, padding: "2px 7px", fontSize: 9, fontWeight: 700 } }, isTheory ? "📘 نظري" : "🔧 عملي"),
                                    React.createElement("div", { style: { display: "flex", gap: 3 } },
                                        cell.refNumber && React.createElement("span", { style: { background: cc, color: "#fff", borderRadius: 4, padding: "1px 5px", fontSize: 8, fontWeight: 700 } }, cell.refNumber),
                                        React.createElement("span", { style: { background: isTheory ? "#283593" : "#065F46", color: "#fff", borderRadius: 8, padding: "2px 6px", fontSize: 9, fontWeight: 700 } },
                                            sessionH,
                                            "\u0633"))),
                                React.createElement("div", { style: { color: cc, fontWeight: 800, fontFamily: "monospace", fontSize: 10, marginBottom: 1 } }, crs.code),
                                showSpec && cell.spec && (React.createElement("span", { style: { background: cc + "22", color: cc, borderRadius: 3,
                                        padding: "0 5px", fontSize: 8, fontWeight: 700, marginBottom: 2, display: "inline-block" } }, spName(cell.spec))),
                                React.createElement("div", { style: { color: "#004D40", fontSize: 9, lineHeight: 1.4, marginBottom: 4 } }, crs.name),
                                showTr && React.createElement("div", { style: { color: isTheory ? "#283593" : "#065F46", fontSize: 9, marginBottom: 2 } },
                                    "\uD83D\uDC68\u200D\uD83C\uDFEB ",
                                    showTr.name),
                                hl && React.createElement("div", { style: { color: "#00695C", fontSize: 9 } },
                                    "\uD83C\uDFDB ",
                                    hl.name),
                                sessionH > 1 && React.createElement("div", { style: { marginTop: 4, color: isTheory ? "#3949AB" : "#10B981", fontSize: 8, fontWeight: 600, direction: "ltr" } },
                                    pr.start,
                                    " \u2014 ",
                                    ((_a = periods.find(p => p.id === pr.id + sessionH - 1)) === null || _a === void 0 ? void 0 : _a.end) || "")))));
                        }).filter(Boolean);
                        return (React.createElement(React.Fragment, null,
                            React.createElement("tr", { key: pr.id },
                                React.createElement("td", { style: { background: "#E8EAF6", padding: "4px 6px", border: "1px solid #E2E8F0", textAlign: "center", verticalAlign: "middle" } },
                                    React.createElement("div", { style: { color: "#283593", fontWeight: 700, fontSize: 11 } },
                                        "\u0627\u0644\u062D\u0635\u0629 ",
                                        pr.label),
                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9, direction: "ltr" } },
                                        pr.start,
                                        "\u2013",
                                        pr.end)),
                                rowCells),
                            pr.breakAfter && (React.createElement("tr", { key: "br" + pr.id },
                                React.createElement("td", { colSpan: 6, style: { background: "#ECFDF5", border: "1px solid #A7F3D0", padding: "3px 12px", fontSize: 9, color: "#065F46" } },
                                    "\uD83D\uDD4C ",
                                    pr.breakAfter.label,
                                    " \u2014 ",
                                    pr.breakAfter.from,
                                    "\u2013",
                                    pr.breakAfter.to)))));
                    })))));
        };
        return (React.createElement("div", { id: "print-area" },
            React.createElement("div", { className: "no-print", style: { display: "flex", gap: 10, marginBottom: 18, alignItems: "center", flexWrap: "wrap" } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\u0639\u0631\u0636 \u0627\u0644\u062C\u062F\u0627\u0648\u0644"),
                React.createElement("div", { style: { display: "flex", gap: 7 } }, [{ id: "trainees", l: "جدول المتدربين", i: "👥" }, { id: "trainers", l: "جدول المدربين", i: "👨‍🏫" }, { id: "halls", l: "جدول القاعات", i: "🏛" }].map(m => (React.createElement("button", { key: m.id, onClick: () => setViewMode(m.id), style: { padding: "6px 12px", borderRadius: 12, border: "1px solid #CBD5E1",
                        background: viewMode === m.id ? "#C5CAE9" : "transparent", color: viewMode === m.id ? "#004D40" : "#00695C", cursor: "pointer", fontSize: 12 } },
                    m.i,
                    " ",
                    m.l)))),
                viewMode !== "halls" && (React.createElement("div", { style: { display: "flex", gap: 7 } }, SPECIALIZATIONS.filter(s => !s.shared).map(s => (React.createElement("button", { key: s.id, onClick: () => setViewSpec(s.id), style: { padding: "6px 12px", borderRadius: 12, border: `1px solid ${s.color}55`,
                        background: viewSpec === s.id ? s.color : "transparent", color: viewSpec === s.id ? "#fff" : s.color, cursor: "pointer", fontSize: 12 } }, s.name))))),
                React.createElement("button", { onClick: () => window.print(), style: { marginRight: "auto", padding: "8px 18px", borderRadius: 16,
                        background: "#EF4444", color: "#fff", border: "none",
                        cursor: "pointer", fontSize: 13, fontWeight: 700, boxShadow: "0 2px 8px #EF444433" } }, "\uD83D\uDDA8\uFE0F \u0637\u0628\u0627\u0639\u0629 / PDF")),
            React.createElement("div", { id: "print-header", style: { display: "none", justifyContent: "space-between",
                    alignItems: "center", background: "linear-gradient(135deg,#1A237E,#283593)", padding: "10px 16px", marginBottom: 14,
                    color: "white", direction: "rtl" } },
                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
                    React.createElement("img", { src: LOGO_B64, alt: "TVTC", style: { height: 44, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" } }),
                    React.createElement("div", { style: { borderRight: "1px solid #ffffff44", paddingRight: 12 } },
                        React.createElement("div", { style: { fontSize: "7pt", color: "#1A237E", marginBottom: 2 } }, "\u0627\u0644\u0645\u0624\u0633\u0633\u0629 \u0627\u0644\u0639\u0627\u0645\u0629 \u0644\u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u062A\u0642\u0646\u064A \u0648\u0627\u0644\u0645\u0647\u0646\u064A"),
                        React.createElement("div", { style: { fontSize: "12pt", fontWeight: 900, color: "#FFFFFF" } }, collegeName || "الكلية التقنية"))),
                React.createElement("div", { style: { textAlign: "center" } },
                    React.createElement("div", { style: { fontSize: "13pt", fontWeight: 800, color: "#FFFFFF" } }, viewMode === "trainees" ? "جدول المتدربين" : viewMode === "trainers" ? "جدول المدربين" : "جدول القاعات"),
                    React.createElement("div", { style: { fontSize: "9pt", color: "#1A237E" } },
                        viewMode !== "halls" ? spName(viewSpec) : "جميع القاعات",
                        " \u2014 \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u062F\u0631\u0627\u0633\u064A \u0661\u0664\u0664\u0667\u0647\u0640")),
                React.createElement("div", { style: { textAlign: "left", fontSize: "9pt", color: "#1A237E" } },
                    React.createElement("div", { style: { color: "#FDE68A", fontWeight: 700, marginBottom: 2 } }, new Date().toLocaleDateString("ar-SA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })),
                    React.createElement("div", null, new Date().toLocaleTimeString("ar-SA", { hour: "2-digit", minute: "2-digit" })),
                    React.createElement("div", { style: { marginTop: 4, color: "#1A237E" } }, "\u0645. \u0645\u0639\u0627\u0630 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0633\u0644\u0648\u0645"),
                    React.createElement("div", { style: { color: "#1A237E" } }, "\u0648\u0643\u064A\u0644 \u0634\u0624\u0648\u0646 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646"))),
            viewMode === "trainees" && [1, 2, 3, 4, 5].map(lv => {
                const lvGroups = scheds[viewSpec] && scheds[viewSpec][lv] ? scheds[viewSpec][lv] : {};
                const gs2 = (groups[viewSpec] && groups[viewSpec][lv]) || [];
                const hasAny = Object.values(lvGroups).some(c => c.length > 0);
                if (!hasAny)
                    return null;
                return (React.createElement("div", { key: lv, style: { marginBottom: 24 } },
                    React.createElement("div", { style: { color: col, fontWeight: 700, fontSize: 14, marginBottom: 10 } },
                        "\u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A ",
                        lv),
                    gs2.map(g => {
                        const cells = (lvGroups[g.id]) || [];
                        if (!cells.length)
                            return null;
                        return (React.createElement("div", { key: g.id, style: { marginBottom: 14 } },
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 7 } },
                                React.createElement("div", { style: { width: 3, height: 16, background: col, borderRadius: 2 } }),
                                React.createElement("span", { style: { color: col, fontWeight: 700, fontSize: 13 } }, g.name),
                                React.createElement(Badge, { color: col },
                                    cells.length,
                                    " \u062D\u0635\u0629"),
                                (() => {
                                    const th = cells.filter(c => { var _a; return c.sessionType === "theory" || (((_a = courses.find(x => x.id === c.courseId)) === null || _a === void 0 ? void 0 : _a.P) === 0); }).length;
                                    const pr = cells.filter(c => { var _a, _b; return c.sessionType === "practical" || (((_a = courses.find(x => x.id === c.courseId)) === null || _a === void 0 ? void 0 : _a.L) === 0 && ((_b = courses.find(x => x.id === c.courseId)) === null || _b === void 0 ? void 0 : _b.T) === 0); }).length;
                                    return (React.createElement(React.Fragment, null,
                                        th > 0 && React.createElement("span", { style: { background: "#EFF6FF", color: "#283593", borderRadius: 8, padding: "1px 8px", fontSize: 10, fontWeight: 700 } },
                                            "\uD83D\uDCD8 \u0646\u0638\u0631\u064A: ",
                                            th),
                                        pr > 0 && React.createElement("span", { style: { background: "#ECFDF5", color: "#065F46", borderRadius: 8, padding: "1px 8px", fontSize: 10, fontWeight: 700 } },
                                            "\uD83D\uDD27 \u0639\u0645\u0644\u064A: ",
                                            pr)));
                                })()),
                            React.createElement(GridTable, { cells: cells, color: col })));
                    })));
            }),
            viewMode === "trainers" && trainers.map(t => {
                // Get ALL cells for this trainer across ALL specs
                const cells = allCrossSpec.filter(c => c.theoryTrainerId === t.id || c.practicalTrainerId === t.id);
                if (!cells.length)
                    return null;
                // Hours: only non-shared copies
                const srcCells = cells.filter(c => !c.isSharedCopy);
                const thH = srcCells.filter(c => c.theoryTrainerId === t.id).reduce((a, s) => a + (s.sessionHours || 1), 0);
                const prH = srcCells.filter(c => c.practicalTrainerId === t.id).reduce((a, s) => a + (s.sessionHours || 1), 0);
                // Group by spec for display
                const specGroups = SPECIALIZATIONS.map(sp => {
                    const spCells = cells.filter(c => c.spec === sp.id);
                    return { sp, cells: spCells };
                }).filter(x => x.cells.length > 0);
                return (React.createElement("div", { key: t.id, style: { background: "#FFFFFF", border: "1px solid rgba(200,200,210,0.5)", borderRadius: 20, boxShadow: "0 2px 16px rgba(26,35,126,0.08),0 1px 4px rgba(0,0,0,0.04)", padding: 14, marginBottom: 14 } },
                    React.createElement("div", { style: { marginBottom: 10 } },
                        React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14, marginBottom: 6 } }, t.name),
                        React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 } },
                            React.createElement("span", { style: { background: "#EFF6FF", color: "#283593", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700 } },
                                "\uD83D\uDCD8 \u0646\u0638\u0631\u064A: ",
                                thH,
                                "\u0633"),
                            React.createElement("span", { style: { background: "#ECFDF5", color: "#065F46", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700 } },
                                "\uD83D\uDD27 \u0639\u0645\u0644\u064A: ",
                                prH,
                                "\u0633"),
                            React.createElement("span", { style: { background: thH + prH > t.maxH ? "#FEE2E2" : "#FEF3C7",
                                    color: thH + prH > t.maxH ? "#991B1B" : "#92400E", borderRadius: 6, padding: "3px 10px", fontSize: 10, fontWeight: 700 } },
                                "\u0625\u062C\u0645\u0627\u0644\u064A: ",
                                thH + prH,
                                "/",
                                t.maxH,
                                "\u0633"),
                            cells.some(c => c.isSharedCopy) && (React.createElement("span", { style: { background: "#F5F3FF", color: "#6D28D9", borderRadius: 8, padding: "3px 8px", fontSize: 10, fontWeight: 700 } },
                                "\uD83D\uDD17 ",
                                cells.filter(c => c.isSharedCopy).length,
                                " \u0645\u0634\u062A\u0631\u0643"))),
                        React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap" } }, specGroups.map(({ sp, cells: sc }) => (React.createElement("span", { key: sp.id, style: { background: sp.color + "18", color: sp.color,
                                border: `1px solid ${sp.color}44`, borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } },
                            sp.name,
                            ": ",
                            sc.length,
                            " \u062D\u0635\u0629"))))),
                    React.createElement(GridTable, { cells: cells, color: "#1A237E", showSpec: true })));
            }),
            viewMode === "halls" && halls.map(hall => {
                const hc = allCrossSpec.filter(c => c.hallId === hall.id);
                if (!hc.length)
                    return null;
                const thCount = hc.filter(c => { var _a; return c.sessionType === "theory" || (((_a = courses.find(x => x.id === c.courseId)) === null || _a === void 0 ? void 0 : _a.P) === 0); }).length;
                const prCount = hc.filter(c => c.sessionType === "practical").length;
                const isTheoryHall = hall.type === "theory";
                return (React.createElement("div", { key: hall.id, style: { background: "#FFFFFF",
                        border: `2px solid ${isTheoryHall ? "#C5CAE9" : "#6EE7B7"}`, borderRadius: 20, padding: 14, marginBottom: 14 } },
                    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" } },
                        React.createElement("div", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 14 } }, hall.name),
                        React.createElement("span", { style: { background: isTheoryHall ? "#EFF6FF" : "#ECFDF5",
                                color: isTheoryHall ? "#283593" : "#065F46", borderRadius: 6,
                                padding: "3px 10px", fontSize: 11, fontWeight: 700 } }, isTheoryHall ? "📘 نظري" : "🔧 عملي"),
                        React.createElement("span", { style: { background: "#FEF3C7", color: "#92400E", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } },
                            "\uD83D\uDC65 \u0633\u0639\u0629: ",
                            hall.cap,
                            " \u0645\u062A\u062F\u0631\u0628"),
                        React.createElement("span", { style: { background: "#F0FDF9", color: "#1A237E", borderRadius: 8, padding: "2px 8px", fontSize: 10, fontWeight: 700 } },
                            hc.length,
                            " \u062D\u0635\u0629 \u0645\u062D\u062C\u0648\u0632\u0629"),
                        thCount > 0 && React.createElement("span", { style: { background: "#EFF6FF", color: "#283593", borderRadius: 8, padding: "2px 8px", fontSize: 10 } },
                            "\uD83D\uDCD8 ",
                            thCount,
                            " \u0646\u0638\u0631\u064A"),
                        prCount > 0 && React.createElement("span", { style: { background: "#ECFDF5", color: "#065F46", borderRadius: 8, padding: "2px 8px", fontSize: 10 } },
                            "\uD83D\uDD27 ",
                            prCount,
                            " \u0639\u0645\u0644\u064A")),
                    React.createElement(GridTable, { cells: hc, color: "#00897B" })));
            })));
    };
    // ── SHARING MODAL ─────────────────────────────────────────
    // ── QUOTA TAB ─────────────────────────────────────────────
    const QuotaTab = () => {
        const THEORY_SIZE = theoryCap; // متدرب / شعبة نظري
        const PRACT_SIZE = practCap; // متدرب / شعبة عملي
        // General Studies course codes (shared)
        const GEN_CODES = new Set([
            "ENGL 101", "ENGL 102", "ENGL 103", "ENGL 204",
            "ETHS 201", "ENTR 101", "ISLM 101", "ARAB 101",
            "MATH 101", "PHYS 101",
        ]);
        const calcGroups = (count, size) => count > 0 ? Math.ceil(count / size) : 0;
        const setCount = (cid, val) => {
            const n = Math.max(0, parseInt(val) || 0);
            setQuotaCounts(p => (Object.assign(Object.assign({}, p), { [cid]: n })));
        };
        // Spec sections: net, auto, then gen separately
        const sections = [
            { spec: "net", label: "تقنية شبكات الحاسب", color: "#0EA5E9" },
            { spec: "auto", label: "تقنية المحركات والمركبات", color: "#F97316" },
            { spec: "gen", label: "الدراسات العامة (مشتركة)", color: "#8B5CF6" },
        ];
        // For net/auto: include their own + gen courses; for gen section: only gen
        const getSectionCourses = (spec) => {
            if (spec === "gen")
                return courses.filter(c => c.spec === "gen" && !c.coop);
            return [
                ...courses.filter(c => c.spec === spec && !c.coop),
                ...courses.filter(c => c.spec === "gen" && !c.coop),
            ];
        };
        // Grand totals for summary
        const allRows = sections.flatMap(s => getSectionCourses(s.spec).map(c => ({
            c, count: quotaCounts[c.id] || 0,
            theoryH: c.L + c.T, practH: c.P,
        })));
        const totalTheoryGroups = allRows.reduce((a, r) => a + (r.theoryH > 0 ? calcGroups(r.count, THEORY_SIZE) : 0), 0);
        const totalPractGroups = allRows.reduce((a, r) => a + (r.practH > 0 ? calcGroups(r.count, PRACT_SIZE) : 0), 0);
        const GroupBadge = ({ n, color }) => n === 0 ? null : (React.createElement("span", { style: { background: color + "22", color, border: `1px solid ${color}44`,
                borderRadius: 8, padding: "1px 8px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" } },
            n,
            " \u0634\u0639\u0628\u0629"));
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 10 } },
                React.createElement("h2", { style: { color: "#1A1A2E", margin: 0, fontSize: 18 } }, "\uD83D\uDCCB \u0627\u0644\u0646\u0635\u0627\u0628 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A"),
                React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" } },
                    React.createElement("button", { onClick: () => setModal("importQuota"), style: { padding: "8px 16px", borderRadius: 16, border: "1px solid #0E7490",
                            background: "#E8EAF6", color: "#1A237E", cursor: "pointer", fontSize: 12, fontWeight: 700,
                            display: "flex", alignItems: "center", gap: 6 } }, "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0646 Excel"),
                    React.createElement("div", { style: { display: "flex", gap: 10 } },
                        React.createElement("div", { style: { background: "#E8EAF6", border: "1px solid #A5F3FC", borderRadius: 16, padding: "8px 16px", textAlign: "center" } },
                            React.createElement("div", { style: { color: "#00695C", fontSize: 10 } }, "\u0627\u0644\u0646\u0638\u0631\u064A / \u0634\u0639\u0628\u0629"),
                            React.createElement("div", { style: { color: "#283593", fontWeight: 800, fontSize: 18 } },
                                THEORY_SIZE,
                                " \u0645\u062A\u062F\u0631\u0628")),
                        React.createElement("div", { style: { background: "#ECFDF5", border: "1px solid #6EE7B7", borderRadius: 16, padding: "8px 16px", textAlign: "center" } },
                            React.createElement("div", { style: { color: "#00695C", fontSize: 10 } }, "\u0627\u0644\u0639\u0645\u0644\u064A / \u0634\u0639\u0628\u0629"),
                            React.createElement("div", { style: { color: "#065F46", fontWeight: 800, fontSize: 18 } },
                                PRACT_SIZE,
                                " \u0645\u062A\u062F\u0631\u0628\u0627\u064B"))))),
            modal === "importQuota" && (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#00000099", zIndex: 4000,
                    display: "flex", alignItems: "center", justifyContent: "center" } },
                React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 24, padding: 24, width: 520,
                        maxHeight: "90vh", overflow: "auto", direction: "rtl", boxShadow: "0 20px 60px #00000033" } },
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                        React.createElement("h3", { style: { color: "#1A1A2E", margin: 0, fontSize: 16, fontWeight: 800 } }, "\uD83D\uDCCA \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646 \u0645\u0646 Excel"),
                        React.createElement("button", { onClick: () => { setModal(null); setImportTxt(""); }, style: { background: "none", border: "none", color: "#1A237E", cursor: "pointer", fontSize: 22 } }, "\u00D7")),
                    React.createElement("div", { style: { background: "#E8EAF6", border: "1px solid #A5F3FC", borderRadius: 16,
                            padding: "12px 14px", marginBottom: 16, fontSize: 11, color: "#1A237E", lineHeight: 1.9 } },
                        React.createElement("strong", null, "\u062E\u0637\u0648\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F:"),
                        React.createElement("br", null),
                        "1. \u0627\u0641\u062A\u062D \u0645\u0644\u0641 Excel \u0627\u0644\u062E\u0627\u0635 \u0628\u0643",
                        React.createElement("br", null),
                        "2. \u062D\u062F\u062F \u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u064A\u062F \u0646\u0633\u062E\u0647\u0627 (\u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631 + \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646)",
                        React.createElement("br", null),
                        "3. \u0627\u0646\u0633\u062E \u0627\u0644\u062E\u0644\u0627\u064A\u0627 \u0648\u0623\u0644\u0635\u0642\u0647\u0627 \u0641\u064A \u0627\u0644\u0645\u0631\u0628\u0639 \u0623\u062F\u0646\u0627\u0647",
                        React.createElement("br", null),
                        "4. \u062D\u062F\u062F \u0641\u064A \u0623\u064A \u0639\u0645\u0648\u062F \u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631 \u0648\u0623\u064A \u0639\u0645\u0648\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646"),
                    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 } },
                        React.createElement("div", null,
                            React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 4 } }, "\u0639\u0645\u0648\u062F \u0631\u0645\u0632 \u0627\u0644\u0645\u0642\u0631\u0631 (Code)"),
                            React.createElement("select", { id: "quota-code-col", defaultValue: "0", style: { width: "100%", border: "1px solid #A5F3FC", borderRadius: 12, padding: "8px 10px",
                                    fontSize: 12, color: "#1A1A2E", background: "#F5F5F5" } }, ["العمود الأول", "العمود الثاني", "العمود الثالث", "العمود الرابع", "العمود الخامس"].map((l, i) => (React.createElement("option", { key: i, value: i }, l))))),
                        React.createElement("div", null,
                            React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 4 } }, "\u0639\u0645\u0648\u062F \u0639\u062F\u062F \u0627\u0644\u0645\u062A\u062F\u0631\u0628\u064A\u0646"),
                            React.createElement("select", { id: "quota-count-col", defaultValue: "1", style: { width: "100%", border: "1px solid #A5F3FC", borderRadius: 12, padding: "8px 10px",
                                    fontSize: 12, color: "#1A1A2E", background: "#F5F5F5" } }, ["العمود الأول", "العمود الثاني", "العمود الثالث", "العمود الرابع", "العمود الخامس"].map((l, i) => (React.createElement("option", { key: i, value: i }, l)))))),
                    React.createElement("div", { style: { marginBottom: 14 } },
                        React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 4 } }, "\u0641\u0627\u0635\u0644 \u0627\u0644\u0623\u0639\u0645\u062F\u0629"),
                        React.createElement("div", { style: { display: "flex", gap: 8 } }, [{ v: "tab", l: "Tab (افتراضي Excel)" },
                            { v: ",", l: "فاصلة ," },
                            { v: ";", l: "فاصلة منقوطة ;" }].map(sep => (React.createElement("label", { key: sep.v, style: { display: "flex", alignItems: "center", gap: 4, cursor: "pointer",
                                fontSize: 11, color: "#1A237E" } },
                            React.createElement("input", { type: "radio", name: "sep", value: sep.v, defaultChecked: sep.v === "tab" }),
                            sep.l))))),
                    React.createElement("div", { style: { marginBottom: 14 } },
                        React.createElement("label", { style: { display: "block", color: "#1A237E", fontSize: 12, fontWeight: 700, marginBottom: 4 } }, "\u0627\u0644\u0635\u0642 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0647\u0646\u0627 (Ctrl+V):"),
                        React.createElement("textarea", { id: "quota-paste", rows: 8, placeholder: "ICMT 121\t45\nINET 111\t38\nENGL 101\t72\n...", style: { width: "100%", border: "1px solid #A5F3FC", borderRadius: 12, padding: 10,
                                fontSize: 11, fontFamily: "monospace", direction: "ltr",
                                background: "#F5F5F5", boxSizing: "border-box", color: "#1A1A2E", resize: "vertical" } })),
                    React.createElement("div", { id: "quota-preview", style: { marginBottom: 14 } }),
                    React.createElement("div", { style: { display: "flex", gap: 10 } },
                        React.createElement("button", { onClick: () => {
                                var _a, _b, _c, _d;
                                const text = ((_a = document.getElementById("quota-paste")) === null || _a === void 0 ? void 0 : _a.value) || "";
                                const codeCol = +((_b = document.getElementById("quota-code-col")) === null || _b === void 0 ? void 0 : _b.value) || 0;
                                const countCol = +((_c = document.getElementById("quota-count-col")) === null || _c === void 0 ? void 0 : _c.value) || 1;
                                const sepVal = ((_d = document.querySelector('input[name="sep"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || "tab";
                                const sep = sepVal === "tab" ? "\t" : sepVal;
                                const lines2 = text.split("\n").filter(l => l.trim());
                                let matched = 0, notFound = [];
                                const newCounts = Object.assign({}, quotaCounts);
                                lines2.forEach(line => {
                                    const cols = line.split(sep).map(c => c.trim().replace(/\r/, ""));
                                    const rawCode = cols[codeCol] || "";
                                    const rawCount = cols[countCol] || "";
                                    const count = parseInt(rawCount.replace(/[^\d]/g, "")) || 0;
                                    if (!rawCode || !count)
                                        return;
                                    // Try to match course by code (partial or full match)
                                    const matched_course = courses.find(c => c.code.replace(/\s/g, "").toLowerCase() === rawCode.replace(/\s/g, "").toLowerCase() ||
                                        c.code.toLowerCase().includes(rawCode.toLowerCase()) ||
                                        rawCode.toLowerCase().includes(c.code.replace(/\s/g, "").toLowerCase()));
                                    if (matched_course) {
                                        newCounts[matched_course.id] = count;
                                        matched++;
                                    }
                                    else {
                                        notFound.push(rawCode);
                                    }
                                });
                                setQuotaCounts(newCounts);
                                setModal(null);
                                const msg = `✅ تم استيراد ${matched} مقرر بنجاح!` +
                                    (notFound.length > 0 ? `\n\n⚠️ لم يُعثر على (${notFound.length}):\n${notFound.slice(0, 10).join(", ")}` : "");
                                alert(msg);
                            }, style: { flex: 1, background: "#283593", color: "#fff", border: "none", borderRadius: 16,
                                padding: "12px", cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "\u2705 \u0627\u0633\u062A\u064A\u0631\u0627\u062F"),
                        React.createElement("button", { onClick: () => { setModal(null); }, style: { padding: "12px 18px", background: "#F5F5F5", color: "#1A237E",
                                border: "1px solid #A5F3FC", borderRadius: 16, cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "\u0625\u0644\u063A\u0627\u0621"))))),
            sections.map(sec => {
                const secCourses = getSectionCourses(sec.spec);
                const byLevel = [1, 2, 3, 4, 5].map(lv => ({
                    lv, list: secCourses.filter(c => c.level === lv)
                })).filter(x => x.list.length > 0);
                return (React.createElement("div", { key: sec.spec, style: { marginBottom: 24 } },
                    React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 } },
                        React.createElement("div", { style: { width: 5, height: 22, background: sec.color, borderRadius: 3 } }),
                        React.createElement("h3", { style: { color: sec.color, margin: 0, fontSize: 15, fontWeight: 800 } }, sec.label)),
                    byLevel.map(({ lv, list }) => (React.createElement("div", { key: lv, style: { marginBottom: 14 } },
                        React.createElement("div", { style: { color: "#00695C", fontSize: 11, fontWeight: 700, marginBottom: 6,
                                paddingRight: 8, borderRight: `2px solid ${sec.color}44` } },
                            "\u0627\u0644\u0641\u0635\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A ",
                            lv),
                        React.createElement("div", { style: { overflowX: "auto" } },
                            React.createElement("table", { style: { borderCollapse: "collapse", width: "100%", fontSize: 12 } },
                                React.createElement("thead", null,
                                    React.createElement("tr", { style: { background: "#F5F5F5" } }, ["الرمز", "اسم المقرر", "مح", "عم", "س.أ", "عدد المتدربين", "شعب نظري", "شعب عملي", "إجمالي الشعب", "إجمالي ساعات الاتصال"].map(h => (React.createElement("th", { key: h, style: { color: "#1A237E", padding: "8px 10px",
                                            border: "1px solid #E2E8F0", textAlign: "center", whiteSpace: "nowrap", fontSize: 11, fontWeight: 700 } }, h))))),
                                React.createElement("tbody", null,
                                    list.map(c => {
                                        const count = quotaCounts[c.id] || 0;
                                        const isGen = GEN_CODES.has(c.code);
                                        const theoryH = c.L + c.T;
                                        const practH = c.P;
                                        const thGroups = theoryH > 0 ? calcGroups(count, THEORY_SIZE) : 0;
                                        const prGroups = practH > 0 ? calcGroups(count, PRACT_SIZE) : 0;
                                        const total = thGroups + prGroups;
                                        const cColor = isGen ? "#8B5CF6" : sec.color;
                                        return (React.createElement("tr", { key: c.id, style: { background: isGen ? "#FAFAF9" : "#FFFFFF" } },
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0",
                                                    color: cColor, fontWeight: 700, fontFamily: "monospace", fontSize: 11 } },
                                                c.code,
                                                isGen && React.createElement("span", { style: { marginRight: 4, background: "#EDE9FE", color: "#7C3AED",
                                                        fontSize: 8, padding: "1px 4px", borderRadius: 3, fontWeight: 700 } }, "\u0645\u0634\u062A\u0631\u0643")),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", color: "#004D40" } }, c.name),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } }, theoryH > 0 ? React.createElement(Badge, { color: "#3949AB" },
                                                theoryH,
                                                "\u0633") : React.createElement("span", { style: { color: "#1A237E" } }, "\u2014")),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } }, practH > 0 ? React.createElement(Badge, { color: "#10B981" },
                                                practH,
                                                "\u0633") : React.createElement("span", { style: { color: "#1A237E" } }, "\u2014")),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement(Badge, { color: "#F59E0B" },
                                                    c.CTH,
                                                    "\u0633")),
                                            React.createElement("td", { style: { padding: "5px 8px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, justifyContent: "center" } },
                                                    React.createElement("input", { type: "number", min: 0, defaultValue: quotaCounts[c.id] || "", key: c.id, onBlur: e => {
                                                            const n = parseInt(e.target.value) || 0;
                                                            setQuotaCounts(p => (Object.assign(Object.assign({}, p), { [c.id]: n })));
                                                        }, onKeyDown: e => {
                                                            if (e.key === "Enter") {
                                                                const n = parseInt(e.target.value) || 0;
                                                                setQuotaCounts(p => (Object.assign(Object.assign({}, p), { [c.id]: n })));
                                                                e.target.blur();
                                                            }
                                                        }, placeholder: "0", style: { width: 80, background: count > 0 ? "#F0FDF4" : "#F5F5F5",
                                                            border: `2px solid ${count > 0 ? "#10B981" : "#C5CAE9"}`,
                                                            borderRadius: 12, padding: "5px 8px", textAlign: "center",
                                                            fontSize: 13, fontWeight: 700, color: "#004D40" } }),
                                                    React.createElement("span", { style: { color: "#00695C", fontSize: 10 } }, "\u0645\u062A\u062F\u0631\u0628"))),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } }, theoryH > 0 && count > 0 ? (React.createElement("div", null,
                                                React.createElement(GroupBadge, { n: thGroups, color: "#3949AB" }),
                                                React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginTop: 2 } },
                                                    count,
                                                    " \u00F7 ",
                                                    THEORY_SIZE,
                                                    " = ",
                                                    thGroups))) : React.createElement("span", { style: { color: "#1A237E", fontSize: 11 } }, "\u2014")),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } }, practH > 0 && count > 0 ? (React.createElement("div", null,
                                                React.createElement(GroupBadge, { n: prGroups, color: "#10B981" }),
                                                React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginTop: 2 } },
                                                    count,
                                                    " \u00F7 ",
                                                    PRACT_SIZE,
                                                    " = ",
                                                    prGroups))) : React.createElement("span", { style: { color: "#1A237E", fontSize: 11 } }, "\u2014")),
                                            React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center" } }, total > 0 ? (React.createElement("span", { style: { background: cColor, color: "#fff", borderRadius: 10,
                                                    padding: "3px 10px", fontWeight: 800, fontSize: 13 } }, total)) : React.createElement("span", { style: { color: "#1A237E" } }, "\u2014")),
                                            (() => {
                                                const totalCTH = (thGroups * theoryH) + (prGroups * practH);
                                                return (React.createElement("td", { style: { padding: "7px 10px", border: "1px solid #E2E8F0", textAlign: "center",
                                                        background: totalCTH > 0 ? "#FFF7ED" : "transparent" } }, totalCTH > 0 ? (React.createElement("div", null,
                                                    React.createElement("span", { style: { background: "#F97316", color: "#fff", borderRadius: 10,
                                                            padding: "3px 10px", fontWeight: 800, fontSize: 13 } },
                                                        totalCTH,
                                                        "\u0633"),
                                                    total > 0 && (React.createElement("div", { style: { color: "#00695C", fontSize: 9, marginTop: 2 } },
                                                        thGroups > 0 ? `${thGroups}×${theoryH}` : "",
                                                        thGroups > 0 && prGroups > 0 ? " + " : "",
                                                        prGroups > 0 ? `${prGroups}×${practH}` : "")))) : React.createElement("span", { style: { color: "#1A237E" } }, "\u2014")));
                                            })()));
                                    }),
                                    (() => {
                                        const filledList = list.filter(c => quotaCounts[c.id] > 0);
                                        if (!filledList.length)
                                            return null;
                                        const subTh = filledList.reduce((a, c) => a + (c.L + c.T > 0 ? calcGroups(quotaCounts[c.id] || 0, THEORY_SIZE) : 0), 0);
                                        const subPr = filledList.reduce((a, c) => a + (c.P > 0 ? calcGroups(quotaCounts[c.id] || 0, PRACT_SIZE) : 0), 0);
                                        const subCTH = filledList.reduce((a, c) => {
                                            const th = c.L + c.T > 0 ? calcGroups(quotaCounts[c.id] || 0, THEORY_SIZE) : 0;
                                            const pr = c.P > 0 ? calcGroups(quotaCounts[c.id] || 0, PRACT_SIZE) : 0;
                                            return a + (th * (c.L + c.T)) + (pr * c.P);
                                        }, 0);
                                        return (React.createElement("tr", { style: { background: "#F0F9FF" } },
                                            React.createElement("td", { colSpan: 6, style: { padding: "6px 10px", border: "1px solid #E2E8F0",
                                                    color: "#283593", fontWeight: 700, fontSize: 11 } },
                                                "\u0645\u062C\u0645\u0648\u0639 \u0627\u0644\u0641\u0635\u0644 ",
                                                lv),
                                            React.createElement("td", { style: { padding: "6px 10px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement(Badge, { color: "#3949AB" },
                                                    subTh,
                                                    " \u0634\u0639\u0628\u0629")),
                                            React.createElement("td", { style: { padding: "6px 10px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement(Badge, { color: "#10B981" },
                                                    subPr,
                                                    " \u0634\u0639\u0628\u0629")),
                                            React.createElement("td", { style: { padding: "6px 10px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement("span", { style: { background: "#283593", color: "#fff", borderRadius: 10,
                                                        padding: "2px 10px", fontWeight: 800, fontSize: 12 } }, subTh + subPr)),
                                            React.createElement("td", { style: { padding: "6px 10px", border: "1px solid #E2E8F0", textAlign: "center" } },
                                                React.createElement("span", { style: { background: "#F97316", color: "#fff", borderRadius: 10,
                                                        padding: "2px 10px", fontWeight: 800, fontSize: 12 } },
                                                    subCTH,
                                                    "\u0633"))));
                                    })()))))))));
            }),
            (totalTheoryGroups + totalPractGroups) > 0 && (() => {
                const totalCTH = sections.flatMap(s => getSectionCourses(s.spec)).reduce((a, c) => {
                    const count = quotaCounts[c.id] || 0;
                    if (!count)
                        return a;
                    const th = c.L + c.T > 0 ? calcGroups(count, THEORY_SIZE) : 0;
                    const pr = c.P > 0 ? calcGroups(count, PRACT_SIZE) : 0;
                    return a + (th * (c.L + c.T)) + (pr * c.P);
                }, 0);
                return (React.createElement("div", { style: { background: "linear-gradient(135deg,#1E3A5F,#1D4ED8)", borderRadius: 20, padding: 20, marginTop: 8 } },
                    React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 800, fontSize: 15, marginBottom: 14 } }, "\uD83D\uDCCA \u0645\u0644\u062E\u0635 \u0627\u0644\u0646\u0635\u0627\u0628 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"),
                    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 } },
                        React.createElement("div", { style: { background: "#ffffff18", borderRadius: 16, padding: "12px", textAlign: "center" } },
                            React.createElement("div", { style: { color: "#1A237E", fontSize: 10 } }, "\u0625\u062C\u0645\u0627\u0644\u064A \u0634\u0639\u0628 \u0627\u0644\u0646\u0638\u0631\u064A"),
                            React.createElement("div", { style: { color: "#C5CAE9", fontWeight: 900, fontSize: 24 } }, totalTheoryGroups),
                            React.createElement("div", { style: { color: "#00695C", fontSize: 9 } },
                                "\u00D7 ",
                                THEORY_SIZE,
                                " \u0645\u062A\u062F\u0631\u0628/\u0634\u0639\u0628\u0629")),
                        React.createElement("div", { style: { background: "#ffffff18", borderRadius: 16, padding: "12px", textAlign: "center" } },
                            React.createElement("div", { style: { color: "#6EE7B7", fontSize: 10 } }, "\u0625\u062C\u0645\u0627\u0644\u064A \u0634\u0639\u0628 \u0627\u0644\u0639\u0645\u0644\u064A"),
                            React.createElement("div", { style: { color: "#D1FAE5", fontWeight: 900, fontSize: 24 } }, totalPractGroups),
                            React.createElement("div", { style: { color: "#6EE7B7", fontSize: 9 } },
                                "\u00D7 ",
                                PRACT_SIZE,
                                " \u0645\u062A\u062F\u0631\u0628\u0627\u064B/\u0634\u0639\u0628\u0629")),
                        React.createElement("div", { style: { background: "#ffffff28", borderRadius: 16, padding: "12px", textAlign: "center", border: "1px solid #ffffff33" } },
                            React.createElement("div", { style: { color: "#FDE68A", fontSize: 10 } }, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0634\u0639\u0628 \u0627\u0644\u0643\u0644\u064A"),
                            React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 900, fontSize: 28 } }, totalTheoryGroups + totalPractGroups),
                            React.createElement("div", { style: { color: "#FDE68A", fontSize: 9 } }, "\u0634\u0639\u0628\u0629 \u062A\u062F\u0631\u064A\u0628\u064A\u0629")),
                        React.createElement("div", { style: { background: "#ffffff28", borderRadius: 16, padding: "12px", textAlign: "center", border: "2px solid #FB923C" } },
                            React.createElement("div", { style: { color: "#FED7AA", fontSize: 10 } }, "\u0625\u062C\u0645\u0627\u0644\u064A \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644"),
                            React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 900, fontSize: 28 } }, totalCTH),
                            React.createElement("div", { style: { color: "#FED7AA", fontSize: 9 } }, "\u0633\u0627\u0639\u0629 \u0627\u062A\u0635\u0627\u0644 \u0623\u0633\u0628\u0648\u0639\u064A\u0629")))));
            })(),
            Object.values(quotaCounts).some(v => v > 0) && (() => {
                // For each specialization, calculate total CTH from quota
                // Then divide by number of trainers eligible for that spec
                const specData = ["net", "auto"].map(specId => {
                    const sc = spColor(specId);
                    // Only specialization courses (NOT gen) — gen is separate
                    const specOnlyCourses = courses.filter(c => c.spec === specId && !c.coop);
                    const genOnlyCourses = courses.filter(c => c.spec === "gen" && !c.coop);
                    const calcCTH = (list) => list.reduce((a, c) => {
                        const count = quotaCounts[c.id] || 0;
                        if (!count)
                            return a;
                        const th = c.L + c.T > 0 ? calcGroups(count, THEORY_SIZE) : 0;
                        const pr = c.P > 0 ? calcGroups(count, PRACT_SIZE) : 0;
                        return a + (th * (c.L + c.T)) + (pr * c.P);
                    }, 0);
                    const specCTH_only = calcCTH(specOnlyCourses); // تخصص فقط
                    const genCTH = calcCTH(genOnlyCourses); // دراسات عامة فقط
                    const specCTH = specCTH_only + genCTH; // الإجمالي
                    // Theory CTH
                    const theoryCTH = [...specOnlyCourses, ...genOnlyCourses].reduce((a, c) => {
                        const count = quotaCounts[c.id] || 0;
                        if (!count || c.L + c.T === 0)
                            return a;
                        return a + calcGroups(count, THEORY_SIZE) * (c.L + c.T);
                    }, 0);
                    // Practical CTH
                    const practCTH = [...specOnlyCourses, ...genOnlyCourses].reduce((a, c) => {
                        const count = quotaCounts[c.id] || 0;
                        if (!count || c.P === 0)
                            return a;
                        return a + calcGroups(count, PRACT_SIZE) * c.P;
                    }, 0);
                    // Eligible trainers — spec trainers handle spec+gen, gen-only handle gen
                    const specTrainers = trainers.filter(t => t.specs.includes(specId));
                    const genTrainers = trainers.filter(t => t.specs.includes("gen") && !t.specs.includes(specId));
                    const allEligible = trainers.filter(t => t.specs.includes(specId) || t.specs.includes("gen"));
                    // Average if distributed among eligible trainers
                    const avgPerTrainer = allEligible.length > 0 ? Math.round(specCTH / allEligible.length) : 0;
                    const maxAllowed = allEligible.length > 0 ? Math.max(...allEligible.map(t => t.maxH)) : 0;
                    const minNeeded = maxAllowed > 0 ? Math.ceil(specCTH / maxAllowed) : 0;
                    return { specId, sc, specCTH, specCTH_only, genCTH, theoryCTH, practCTH,
                        specTrainers, genTrainers, allEligible,
                        avgPerTrainer, maxAllowed, minNeeded };
                });
                return (React.createElement("div", { style: { marginTop: 20 } },
                    React.createElement("h3", { style: { color: "#1A1A2E", fontSize: 14, fontWeight: 800, marginBottom: 14,
                            borderBottom: "2px solid #E2E8F0", paddingBottom: 8 } }, "\uD83D\uDC68\u200D\uD83C\uDFEB \u0645\u062A\u0648\u0633\u0637 \u0627\u0644\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0645\u062A\u0648\u0642\u0639\u0629 \u0644\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u062D\u0633\u0628 \u0627\u0644\u062A\u062E\u0635\u0635"),
                    React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, specData.map((item) => {
                        const { specId, sc, specCTH, specCTH_only, genCTH, theoryCTH, practCTH, specTrainers, genTrainers, allEligible, avgPerTrainer, maxAllowed, minNeeded } = item;
                        if (!specCTH)
                            return null;
                        const overloaded = avgPerTrainer > maxAllowed;
                        return (React.createElement("div", { key: specId, style: { background: "#FFFFFF", border: `2px solid ${sc}33`,
                                borderRadius: 20, padding: 18 } },
                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 14 } },
                                React.createElement("div", { style: { width: 4, height: 20, background: sc, borderRadius: 2 } }),
                                React.createElement("div", { style: { color: sc, fontWeight: 800, fontSize: 14 } }, spName(specId))),
                            React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 10 } },
                                React.createElement("div", { style: { background: "#E8EAF6", borderRadius: 12, padding: "8px", textAlign: "center" } },
                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9 } }, "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0646\u0638\u0631\u064A"),
                                    React.createElement("div", { style: { color: "#283593", fontWeight: 800, fontSize: 16 } }, theoryCTH),
                                    React.createElement("div", { style: { color: "#1A237E", fontSize: 8 } }, "\u0633/\u0623\u0633\u0628\u0648\u0639")),
                                React.createElement("div", { style: { background: "#ECFDF5", borderRadius: 12, padding: "8px", textAlign: "center" } },
                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9 } }, "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u064A"),
                                    React.createElement("div", { style: { color: "#065F46", fontWeight: 800, fontSize: 16 } }, practCTH),
                                    React.createElement("div", { style: { color: "#1A237E", fontSize: 8 } }, "\u0633/\u0623\u0633\u0628\u0648\u0639")),
                                React.createElement("div", { style: { background: `${sc}11`, borderRadius: 12, padding: "8px", textAlign: "center",
                                        border: `1px solid ${sc}33` } },
                                    React.createElement("div", { style: { color: "#00695C", fontSize: 9 } }, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A"),
                                    React.createElement("div", { style: { color: sc, fontWeight: 900, fontSize: 18 } }, specCTH),
                                    React.createElement("div", { style: { color: "#1A237E", fontSize: 8 } }, "\u0633/\u0623\u0633\u0628\u0648\u0639"))),
                            genCTH > 0 && (React.createElement("div", { style: { background: "#F5F3FF", border: "1px solid #DDD6FE", borderRadius: 12,
                                    padding: "6px 10px", marginBottom: 10, fontSize: 10, color: "#5B21B6" } },
                                "\uD83D\uDCDA \u0645\u0646\u0647\u0627: ",
                                React.createElement("strong", null,
                                    specCTH_only,
                                    "\u0633"),
                                " \u062A\u062E\u0635\u0635 +",
                                React.createElement("strong", null,
                                    " ",
                                    genCTH,
                                    "\u0633"),
                                " \u062F\u0631\u0627\u0633\u0627\u062A \u0639\u0627\u0645\u0629")),
                            React.createElement("div", { style: { marginBottom: 10 } },
                                React.createElement("div", { style: { color: "#1A237E", fontSize: 11, fontWeight: 700, marginBottom: 8 } }, "\u062A\u0648\u0632\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0627\u0644\u0645\u0624\u0647\u0644\u064A\u0646:"),
                                allEligible.map(t => {
                                    const isSpec = t.specs.includes(specId);
                                    const isGenOnly = !isSpec && t.specs.includes("gen");
                                    // Spec trainer: handles spec+gen hours
                                    // Gen-only trainer: handles gen hours only
                                    const trainerCTH = isSpec
                                        ? Math.round(specCTH / specTrainers.length +
                                            (genTrainers.length === 0 ? 0 : 0)) // spec trainers split all
                                        : Math.round(genCTH / (genTrainers.length || 1)); // gen-only split gen
                                    const actualCTH = isSpec
                                        ? Math.round(specCTH / allEligible.length)
                                        : Math.round(genCTH / Math.max(genTrainers.length, 1));
                                    const pct = Math.min(100, t.maxH > 0 ? actualCTH / t.maxH * 100 : 0);
                                    const over = actualCTH > t.maxH;
                                    return (React.createElement("div", { key: t.id, style: { marginBottom: 8 } },
                                        React.createElement("div", { style: { display: "flex", justifyContent: "space-between",
                                                alignItems: "center", marginBottom: 3 } },
                                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
                                                React.createElement("span", { style: { color: "#004D40", fontSize: 11, fontWeight: 600 } }, t.name),
                                                React.createElement("span", { style: { background: isSpec ? sc + "22" : "#F3F4F6",
                                                        color: isSpec ? sc : "#8B5CF6", borderRadius: 4,
                                                        padding: "1px 6px", fontSize: 9, fontWeight: 700 } }, isSpec ? spName(specId) : "دراسات عامة")),
                                            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
                                                React.createElement("span", { style: { color: over ? "#EF4444" : "#00695C",
                                                        fontSize: 11, fontWeight: 700 } },
                                                    "~",
                                                    actualCTH,
                                                    "\u0633"),
                                                React.createElement("span", { style: { color: "#1A237E", fontSize: 10 } },
                                                    "/ ",
                                                    t.maxH,
                                                    "\u0633"),
                                                over && React.createElement("span", { style: { background: "#FEE2E2", color: "#991B1B",
                                                        borderRadius: 4, padding: "1px 5px", fontSize: 9, fontWeight: 700 } }, "\u062A\u062C\u0627\u0648\u0632!"))),
                                        React.createElement("div", { style: { background: "#C5CAE9", borderRadius: 149, height: 6, overflow: "hidden" } },
                                            React.createElement("div", { style: { height: "100%", borderRadius: 149,
                                                    width: pct + "%",
                                                    background: over ? "#EF4444" : pct > 80 ? "#F59E0B" : "#10B981",
                                                    transition: "width 0.3s" } }))));
                                })),
                            React.createElement("div", { style: { background: overloaded ? "#FEF2F2" : "#F0FDF4",
                                    border: `1px solid ${overloaded ? "#EF4444" : "#10B981"}`,
                                    borderRadius: 12, padding: "8px 12px", fontSize: 11 } }, overloaded ? (React.createElement("div", { style: { color: "#991B1B" } },
                                "\u26A0\uFE0F \u0627\u0644\u062D\u0645\u0644 \u064A\u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0637\u0627\u0642\u0629 \u2014 \u064A\u064F\u0646\u0635\u062D \u0628\u0640",
                                React.createElement("strong", null,
                                    " ",
                                    minNeeded,
                                    " \u0645\u062F\u0631\u0628 "),
                                "\u0643\u062D\u062F \u0623\u062F\u0646\u0649 \u0644\u062A\u063A\u0637\u064A\u0629 ",
                                specCTH,
                                " \u0633\u0627\u0639\u0629")) : (React.createElement("div", { style: { color: "#065F46" } },
                                "\u2705 \u0627\u0644\u062D\u0645\u0644 \u0645\u0646\u0627\u0633\u0628 \u2014 \u0645\u062A\u0648\u0633\u0637 ",
                                avgPerTrainer,
                                " \u0633\u0627\u0639\u0629 / \u0645\u062F\u0631\u0628 \u0645\u0646 \u0623\u0635\u0644 ",
                                allEligible.length,
                                " \u0645\u062F\u0631\u0628 \u0645\u0624\u0647\u0644")))));
                    }))));
            })()));
    };
    // ── RENDER ────────────────────────────────────────────────
    const [menuOpen, setMenuOpen] = (0, React.useState)(false);
    const doBackup = () => {
        const data = {
            version: "1.0",
            savedAt: new Date().toLocaleString("ar-SA"),
            courses, trainers, halls, trainees,
            scheds, groups, courseAssign, periods, quotaCounts, theoryCap, practCap,
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `جدول-احتياطي-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const TAB_ICONS = {
        dashboard: { icon: "📊", label: "الرئيسية" },
        courses: { icon: "📚", label: "المقررات" },
        trainers: { icon: "👨‍🏫", label: "المدربون" },
        halls: { icon: "🏛", label: "القاعات" },
        trainees: { icon: "👥", label: "المتدربون" },
        schedule: { icon: "📅", label: "الجداول" },
        view: { icon: "🗓", label: "العرض" },
        stats: { icon: "📈", label: "الإحصائيات" },
        quota: { icon: "📋", label: "النصاب التدريبي" },
    };
    return (React.createElement("div", { style: { minHeight: "100vh", background: "linear-gradient(160deg,#EEF2FF 0%,#F5F5F5 50%,#F3F4FF 100%)", fontFamily: "'Segoe UI',Tahoma,Arial,sans-serif", direction: "rtl", paddingBottom: 100 } },
        React.createElement("style", { dangerouslySetInnerHTML: { __html: `
        @media print {
          @page { size: A4 landscape; margin: 6mm; }
          body * { visibility: hidden !important; }
          #print-area, #print-area * { visibility: visible !important; }
          #print-area { position: fixed !important; inset: 0; background: white !important; padding: 6mm; }
          #print-header { display: flex !important; border-radius: 8px; margin-bottom: 10px; }
          .no-print { display: none !important; }
          table { font-size: 7pt !important; }
          td, th { padding: 3px 5px !important; }
        }
      ` } }),
        React.createElement("div", { style: { background: "linear-gradient(135deg,#1A237E,#283593)", padding: "10px 16px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                position: "sticky", top: 0, zIndex: 400, boxShadow: "0 4px 24px rgba(26,35,126,0.18),0 1px 4px rgba(0,0,0,0.08)" } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                React.createElement("img", { src: LOGO_B64, alt: "TVTC", style: { height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", flexShrink: 0 } }),
                React.createElement("div", { style: { borderRight: "1px solid #ffffff33", paddingRight: 10 } },
                    React.createElement("div", { style: { color: "#FFFFFF", fontWeight: 800, fontSize: 13, lineHeight: 1.2 } }, "\u0646\u0638\u0627\u0645 \u0627\u0644\u062C\u062F\u0627\u0648\u0644 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629"),
                    React.createElement("div", { style: { color: "#93C5FD", fontSize: 10, lineHeight: 1.3, fontWeight: 600 } }, collegeName || React.createElement("span", { style: { color: "#7DD3FC", fontStyle: "italic" } }, "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0643\u0644\u064A\u0629 \u0645\u0646 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629")),
                    React.createElement("div", { style: { color: "#1A237E", fontSize: 8, direction: "ltr", lineHeight: 1.2 } }, "07:30\u201314:20 | 8 \u062D\u0635\u0635 | 50 \u062F\u0642\u064A\u0642\u0629"))),
            React.createElement("div", { style: { display: "flex", gap: 8, flexShrink: 0, alignItems: "center" } },
                React.createElement("span", { style: { color: "#C5CAE9", fontSize: 9, display: "flex", alignItems: "center", gap: 3 } },
                    "\uD83D\uDCBE ",
                    React.createElement("span", null, "\u0645\u062D\u0641\u0648\u0638 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B")),
                React.createElement("button", { onClick: doBackup, title: "\u0646\u0633\u062E \u0627\u062D\u062A\u064A\u0627\u0637\u064A", style: { width: 38, height: 38, borderRadius: 16, border: "1px solid #10b98166",
                        background: "#10b98120", color: "#10b981", cursor: "pointer", fontSize: 18,
                        display: "flex", alignItems: "center", justifyContent: "center" } }, "\uD83D\uDCBE"),
                React.createElement("button", { onClick: () => setModal("restore"), title: "\u0627\u0633\u062A\u0639\u0627\u062F\u0629", style: { width: 38, height: 38, borderRadius: 16, border: "1px solid #f59e0b66",
                        background: "#f59e0b20", color: "#f59e0b", cursor: "pointer", fontSize: 18,
                        display: "flex", alignItems: "center", justifyContent: "center" } }, "\uD83D\uDCC2"),
                React.createElement("button", { onClick: () => setModal("resetAll"), title: "\u062D\u0630\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", style: { width: 38, height: 38, borderRadius: 16, border: "1px solid #ef444466",
                        background: "#ef444420", color: "#ef4444", cursor: "pointer", fontSize: 18,
                        display: "flex", alignItems: "center", justifyContent: "center" } }, "\uD83D\uDDD1\uFE0F"))),
        React.createElement("div", { style: { background: "#FFFFFF", borderBottom: "2px solid #E2E8F0",
                padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 } },
            React.createElement("span", { style: { fontSize: 22 } }, (_a = TAB_ICONS[tab]) === null || _a === void 0 ? void 0 : _a.icon),
            React.createElement("span", { style: { color: "#1A1A2E", fontWeight: 800, fontSize: 16 } }, (_b = TAB_ICONS[tab]) === null || _b === void 0 ? void 0 : _b.label)),
        React.createElement("div", { style: { padding: "14px 12px", maxWidth: 1480, margin: "0 auto" } },
            tab === "dashboard" && React.createElement(Dashboard, null),
            tab === "courses" && React.createElement(CoursesTab, null),
            tab === "trainers" && React.createElement(TrainersTab, null),
            tab === "halls" && React.createElement(HallsTab, null),
            tab === "trainees" && React.createElement(TraineesTab, null),
            tab === "schedule" && React.createElement(ScheduleTab, null),
            tab === "view" && React.createElement(ViewTab, null),
            tab === "stats" && React.createElement(StatsTab, null),
            tab === "quota" && React.createElement(QuotaTab, null)),
        React.createElement("div", { style: { position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 400,
                background: "#FFFFFF", borderTop: "1px solid #E2E8F0",
                display: "flex", flexDirection: "column", alignItems: "stretch",
                boxShadow: "0 -2px 20px rgba(26,35,126,0.1),0 -1px 4px rgba(0,0,0,0.05)" } },
            React.createElement("div", { style: { display: "flex", alignItems: "stretch" } },
                TABS.map(t => {
                    const active = tab === t.id;
                    return (React.createElement("button", { key: t.id, onClick: () => setTab(t.id), style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                            justifyContent: "center", padding: "8px 2px 6px", border: "none", cursor: "pointer",
                            background: active ? "#E8EAF6" : "#FFFFFF",
                            borderBottom: active ? "3px solid #3949AB" : "3px solid transparent", borderTop: "none" } }));
                }),
                ":\"3px solid transparent\", transition:\"all 0.15s\"}}>",
                React.createElement("span", { style: { fontSize: 20, lineHeight: 1, marginBottom: 3 } }, (_c = TAB_ICONS[t.id]) === null || _c === void 0 ? void 0 : _c.icon),
                React.createElement("span", { style: { fontSize: 9, fontWeight: active ? 700 : 500,
                        color: active ? "#283593" : "#00695C", lineHeight: 1, whiteSpace: "nowrap" } }, (_d = TAB_ICONS[t.id]) === null || _d === void 0 ? void 0 : _d.label)),
            "); })}"),
        React.createElement("div", { style: { textAlign: "center", padding: "5px 8px 8px",
                borderTop: "1px solid #E2E8F0", background: "#1A237E" } },
            React.createElement("span", { style: { color: "#1A237E", fontSize: 10 } },
                "\u062A\u0635\u0645\u064A\u0645 \u0648\u062A\u0637\u0648\u064A\u0631 \u00A0",
                React.createElement("strong", { style: { color: "#FFFFFF" } }, "\u0645. \u0645\u0639\u0627\u0630 \u0639\u0628\u062F\u0627\u0644\u0644\u0647 \u0627\u0644\u0633\u0644\u0648\u0645"),
                "\u00A0\u2014\u00A0 \u0648\u0643\u064A\u0644 \u0634\u0624\u0648\u0646 \u0627\u0644\u0645\u062F\u0631\u0628\u064A\u0646 \u0628\u0627\u0644\u0643\u0644\u064A\u0629 \u0627\u0644\u062A\u0642\u0646\u064A\u0629 \u0628\u0627\u0644\u0628\u062F\u0627\u0626\u0639")))) /* Restore modal */;
    { /* Restore modal */ }
    { /* ══ RESET ALL DATA MODAL ══ */ }
    {
        modal === "resetAll" && (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#00000099", zIndex: 4000,
                display: "flex", alignItems: "center", justifyContent: "center" } },
            React.createElement("div", { style: { background: "#FFFFFF", borderRadius: 24, padding: 26, width: 360,
                    direction: "rtl", boxShadow: "0 20px 60px #00000044", textAlign: "center" } },
                React.createElement("div", { style: { fontSize: 48, marginBottom: 12 } }, "\u26A0\uFE0F"),
                React.createElement("h3", { style: { color: "#EF4444", margin: "0 0 10px", fontSize: 18, fontWeight: 900 } }, "\u062D\u0630\u0641 \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"),
                React.createElement("p", { style: { color: "#475569", fontSize: 13, lineHeight: 1.8, marginBottom: 20 } },
                    "\u0633\u064A\u062A\u0645 \u062D\u0630\u0641 ",
                    React.createElement("strong", null, "\u0643\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A"),
                    " \u0628\u0634\u0643\u0644 \u0643\u0627\u0645\u0644:",
                    React.createElement("br", null),
                    "\u0627\u0644\u062C\u062F\u0627\u0648\u0644\u060C \u0627\u0644\u0645\u062F\u0631\u0628\u0648\u0646\u060C \u0627\u0644\u0642\u0627\u0639\u0627\u062A\u060C \u0627\u0644\u0645\u0642\u0631\u0631\u0627\u062A\u060C",
                    React.createElement("br", null),
                    "\u0627\u0644\u0646\u0635\u0627\u0628 \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u060C \u0648\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A"),
                React.createElement("div", { style: { background: "#FEF2F2", border: "1px solid #EF4444", borderRadius: 16,
                        padding: "10px 14px", marginBottom: 20, fontSize: 12, color: "#991B1B" } },
                    "\u26A0\uFE0F \u0647\u0630\u0627 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 ",
                    React.createElement("strong", null, "\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646\u0647"),
                    React.createElement("br", null),
                    "\u062A\u0623\u0643\u062F \u0645\u0646 \u0639\u0645\u0644 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 \u0623\u0648\u0644\u0627\u064B"),
                React.createElement("div", { style: { display: "flex", gap: 10 } },
                    React.createElement("button", { onClick: () => {
                            // Reset all state to defaults
                            setCourses(ALL_COURSES);
                            setTrainers(INIT_TRAINERS);
                            setHalls(INIT_HALLS);
                            setTrainees([]);
                            setScheds({ net: {}, auto: {}, gen: {} });
                            setGroups({});
                            setCourseAssign({});
                            setPeriods(DEFAULT_PERIOD_CONFIG);
                            setQuotaCounts({});
                            setTheoryCap(35);
                            setPractCap(20);
                            setCollegeName("");
                            setTab("dashboard");
                            // Clear localStorage
                            try {
                                localStorage.removeItem('tvtc_autosave');
                                localStorage.removeItem('tvtc_collegeName');
                            }
                            catch (_a) { }
                            setModal(null);
                            alert("✅ تم حذف جميع البيانات. النظام الآن جديد تماماً.");
                        }, style: { flex: 1, background: "#EF4444", color: "#fff", border: "none",
                            borderRadius: 16, padding: "12px", cursor: "pointer", fontSize: 14, fontWeight: 800 } }, "\uD83D\uDDD1\uFE0F \u0646\u0639\u0645\u060C \u0627\u062D\u0630\u0641 \u0643\u0644 \u0634\u064A\u0621"),
                    React.createElement("button", { onClick: () => setModal(null), style: { flex: 1, background: "#F5F5F5", color: "#1A237E",
                            border: "1px solid #A5F3FC", borderRadius: 16, padding: "12px",
                            cursor: "pointer", fontSize: 14, fontWeight: 700 } }, "\u0625\u0644\u063A\u0627\u0621")))));
    }
    {
        modal === "restore" && (React.createElement("div", { style: { position: "fixed", inset: 0, background: "#000000bb", zIndex: 3000, display: "flex", alignItems: "center", justifyContent: "center" } },
            React.createElement("div", { style: { background: "#FFFFFF", border: "1px solid #1e2d45", borderRadius: 20, padding: 26, width: 520, direction: "rtl" } },
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
                    React.createElement("h3", { style: { color: "#1A1A2E", margin: 0, fontSize: 16 } }, "\uD83D\uDCC2 \u0627\u0633\u062A\u0639\u0627\u062F\u0629 \u0646\u0633\u062E\u0629 \u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629"),
                    React.createElement("button", { onClick: () => setModal(null), style: { background: "none", border: "none", color: "#00695C", cursor: "pointer", fontSize: 22 } }, "\u00D7")),
                React.createElement("div", { style: { color: "#00695C", fontSize: 12, marginBottom: 14, lineHeight: 1.8 } }, "\u0627\u0644\u0635\u0642 \u0645\u062D\u062A\u0648\u0649 \u0645\u0644\u0641 \u0627\u0644\u0646\u0633\u062E\u0629 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u0637\u064A\u0629 (.json) \u0647\u0646\u0627\u060C \u0623\u0648 \u0627\u0633\u062D\u0628 \u0627\u0644\u0645\u0644\u0641 \u0648\u0623\u0641\u0644\u062A\u0647 \u0641\u064A \u0627\u0644\u0645\u0631\u0628\u0639 \u0623\u062F\u0646\u0627\u0647."),
                React.createElement("textarea", { id: "restore-input", rows: 8, placeholder: '{ "version": "1.0", "courses": [...], ... }', style: { width: "100%", background: "#FFFFFF", border: "1px solid #1e3a5f", borderRadius: 12,
                        padding: 12, color: "#004D40", fontSize: 12, fontFamily: "monospace", boxSizing: "border-box", direction: "ltr", resize: "vertical" }, onDragOver: e => e.preventDefault(), onDrop: e => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        if (!file)
                            return;
                        const reader = new FileReader();
                        reader.onload = ev => { document.getElementById("restore-input").value = ev.target.result; };
                        reader.readAsText(file);
                    } }),
                React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 14 } },
                    React.createElement("button", { onClick: () => {
                            try {
                                const txt = document.getElementById("restore-input").value.trim();
                                const data = JSON.parse(txt);
                                if (data.courses)
                                    setCourses(data.courses);
                                if (data.trainers)
                                    setTrainers(data.trainers);
                                if (data.halls)
                                    setHalls(data.halls);
                                if (data.trainees)
                                    setTrainees(data.trainees);
                                if (data.scheds)
                                    setScheds(data.scheds);
                                if (data.groups)
                                    setGroups(data.groups);
                                if (data.courseAssign)
                                    setCourseAssign(data.courseAssign);
                                if (data.periods)
                                    setPeriods(data.periods);
                                if (data.quotaCounts)
                                    setQuotaCounts(data.quotaCounts);
                                if (data.theoryCap)
                                    setTheoryCap(data.theoryCap);
                                if (data.practCap)
                                    setPractCap(data.practCap);
                                setModal(null);
                                alert("✅ تم استعادة النسخة الاحتياطية بنجاح!");
                            }
                            catch (e) {
                                alert("❌ خطأ في قراءة الملف. تأكد أن الملف صحيح.");
                            }
                        }, style: { flex: 1, background: "#10b981", color: "#fff", border: "none", borderRadius: 14,
                            padding: "10px", cursor: "pointer", fontSize: 13, fontWeight: 700 } }, "\u2705 \u0627\u0633\u062A\u0639\u0627\u062F\u0629"),
                    React.createElement("button", { onClick: () => setModal(null), style: { flex: 1, background: "transparent", color: "#00695C",
                            border: "1px solid #334155", borderRadius: 14, padding: "10px", cursor: "pointer", fontSize: 13 } }, "\u0625\u0644\u063A\u0627\u0621")))));
    }
    { /* Sharing Modal */ }
    div >
    ;
    ;
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
