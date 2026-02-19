import { COLORS, cssVar } from "../utils";

//---------------------------------------------------
// Chart.js constants
//---------------------------------------------------
export const PROPS = {
  font: {
    family: "Figtree",
    size: "10px",
  },
};

//---------------------------------------------------
// Chart.js Helpers
//---------------------------------------------------
// Gradient background
export const chartGradient = (
  ctx,
  chartArea,
  gradientHeight,
  colorStart,
  colorEnd
) => {
  let width, height, gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (gradient === null || width !== chartWidth || height !== chartHeight) {
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, colorEnd);
    gradient.addColorStop(gradientHeight, colorStart);
  }

  return gradient;
};

// Common tooltip style
export const CHART_TOOLTIP = {
  titleFont: {
    family: PROPS.font.family,
    size: PROPS.font.size,
    weight: "normal",
  },
  titleColor: cssVar("--bs-tooltips-color"),
  bodyColor: cssVar("--bs-tooltips-color"),
  bodyFont: {
    family: PROPS.font.family,
    size: PROPS.font.size,
  },
  titleMarginBottom: 3,
  backgroundColor: cssVar("--bs-tooltips-bg"),
  padding: 10,
  cornerRadius: 6,
  multiKeyBackground: COLORS.transparent,
  displayColors: false,
  caretSize: 0,
};

// Common tick style
export const chartTicks = (padding = 8, align = "inner") => ({
  font: {
    family: PROPS.font.family,
    size: PROPS.font.size,
  },
  color: cssVar("--bs-secondary-color"),
  padding: padding,
  source: "auto",
  align: align,
  distribution: "linear",
  autoSkip: true,
  maxRotation: 0,
});

// Common legend style
export const CHART_LEGEND_LABEL = {
  pointStyle: "circle",
  boxWidth: 7,
  boxHeight: 7,
  padding: 20,
  color: cssVar("--bs-secondary-color"),
  font: {
    family: PROPS.font.family,
    size: PROPS.font.size,
  },
};

// Common grid style
export const CHART_GRID = {
  drawBorder: false,
  drawTicks: false,
  color: cssVar("--bs-border-light"),
};

// Reload Chart.js for dark/light mode themes.
// Not for Pie and Doughnut charts.
export const reloadChart = (chart, callback) => {
  callback;

  if (chart.config.type !== "doughnut" && chart.config.type !== "pie") {
    // Grid
    chart.config.options.scales.x.grid.color = cssVar("--bs-border-light");
    chart.config.options.scales.y.grid.color = cssVar("--bs-border-light");

    // Ticks
    chart.config.options.scales.x.ticks.color = cssVar("--bs-secondary-color");
    chart.config.options.scales.y.ticks.color = cssVar("--bs-secondary-color");
  }

  // Tooltip
  chart.config.options.plugins.tooltip.backgroundColor =
    cssVar("--bs-tooltips-bg");
  chart.config.options.plugins.tooltip.titleColor = cssVar(
    "--bs-tooltips-color"
  );
  chart.config.options.plugins.tooltip.bodyColor = cssVar(
    "--bs-tooltips-color"
  );

  // Update chart
  chart.update();
};

// Generate time series data
export const generateTimeSeriesData = (baseval, count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = baseval;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x, y });
    baseval += 86400000;
    i++;
  }
  return series;
};

// Generate data between two dates
export const getDatesBetweenDates = (startDate, endDate) => {
  let dates = [];
  const date = new Date(startDate);
  while (date < endDate) {
    dates = [...dates, new Date(date)];
    date.setDate(date.getDate() + 1);
  }
  return dates;
};
