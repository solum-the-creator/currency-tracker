/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataChart, DataConfigType } from '@customTypes/timeline';
import { ChartOptions, Plugin } from 'chart.js';

const colors = {
  green: '#16C782',
  red: '#EA3943',
  grey: '#1C1C1D',
  orange: '#FF971D',
};

const data: DataConfigType = {
  datasets: [
    {
      label: 'Chart',
      data: [],
      backgroundColor: (ctx: any): string => {
        const {
          raw: { o, c },
        } = ctx;

        return c >= o ? colors.green : colors.red;
      },
      barThickness: 10,
      minBarLength: 2,
    },
  ],
};

const options: ChartOptions<'bar'> = {
  maintainAspectRatio: false,
  parsing: {
    xAxisKey: 'x',
    yAxisKey: 's',
  },
  layout: {
    padding: {
      top: 40,
      left: 40,
      bottom: 40,
    },
  },
  scales: {
    x: {
      type: 'timeseries',
      time: {
        unit: 'day',
        tooltipFormat: 'MMM d, yyyy',
      },
      ticks: {
        display: false,
      },
      grid: {
        color: colors.grey,
        offset: false,
      },
    },
    y: {
      grace: 1,
      beginAtZero: false,
      position: 'right',
      grid: {
        color: colors.grey,
      },
      ticks: {
        color: '#CDCDCD',
        font: {
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        beforeBody: (ctx: any): string[] => {
          const bodyArray = [
            `O: ${ctx[0].raw.o.toFixed(2)}`,
            `H: ${ctx[0].raw.h.toFixed(2)}`,
            `L: ${ctx[0].raw.l.toFixed(2)}`,
            `C: ${ctx[0].raw.c.toFixed(2)}`,
          ];
          return bodyArray;
        },
        label: (): string => '',
      },
    },
  },
};

const candlestick: Plugin = {
  id: 'candlestick',
  beforeDatasetsDraw(chart: any): void {
    const {
      ctx,
      data,
      scales: { y },
    } = chart;

    ctx.save();
    ctx.lineWidth = 2;

    data.datasets[0].data.forEach((dataPoint: DataChart, index: number): void => {
      const { o, c } = dataPoint;

      ctx.strokeStyle = c >= o ? colors.green : colors.red;

      ctx.beginPath();
      ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].h),
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
      ctx.lineTo(
        chart.getDatasetMeta(0).data[index].x,
        y.getPixelForValue(data.datasets[0].data[index].l),
      );
      ctx.stroke();
    });
  },
};

const crosshair: Plugin = {
  id: 'crosshair',
  afterDatasetsDraw(chart: any): void {
    const {
      ctx,
      chartArea: { top, bottom, left, right, height },
      tooltip,
      scales: { x, y },
    } = chart;
    if (tooltip?._active && tooltip?._active.length) {
      const activePoint = tooltip._active[0];
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = colors.orange;

      ctx.beginPath();
      ctx.moveTo(activePoint.element.x, top);
      ctx.lineTo(activePoint.element.x, bottom);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(left, y.getPixelForValue(tooltip.dataPoints[0].raw.c));
      ctx.lineTo(right, y.getPixelForValue(tooltip.dataPoints[0].raw.c));
      ctx.stroke();

      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.fillRect(0, y.getPixelForValue(tooltip.dataPoints[0].raw.c) - 12, left, 24);

      ctx.beginPath();
      const textWidth = ctx.measureText(tooltip.dataPoints[0].label).width + 10;
      ctx.fillRect(
        x.getPixelForValue(tooltip.dataPoints[0].raw.x) - textWidth / 2,
        top + height,
        textWidth,
        24,
      );

      ctx.fillStyle = 'transparent';
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseLine = 'middle';

      ctx.fillText(
        tooltip.dataPoints[0].raw.c.toFixed(2),
        left / 2,
        y.getPixelForValue(tooltip.dataPoints[0].raw.c),
      );
      ctx.fillText(
        tooltip.dataPoints[0].label,
        x.getPixelForValue(tooltip.dataPoints[0].raw.x),
        top + height + 12,
      );

      chart.canvas.style.cursor = 'crosshair';
    } else {
      chart.canvas.style.cursor = 'default';
    }
  },
};

const axisArrowPlugin = {
  id: 'axisArrowPlugin',
  afterDraw(chart: any) {
    const {
      ctx,
      chartArea: { left, right, top, bottom },
    } = chart;

    const arrowSize = 10;
    const arrowColor = '#fff';
    const labelColor = '#B3B3B4';
    const labelFont = '14px Arial';
    const xOffset = 20;
    const yOffset = 20;

    ctx.save();
    ctx.strokeStyle = arrowColor;
    ctx.fillStyle = arrowColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(left - xOffset, bottom + yOffset);
    ctx.lineTo(right, bottom + yOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(right, bottom + yOffset);
    ctx.lineTo(right - arrowSize, bottom + yOffset - arrowSize / 2);
    ctx.lineTo(right - arrowSize, bottom + yOffset + arrowSize / 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(left - xOffset, bottom + yOffset);
    ctx.lineTo(left - xOffset, top - yOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(left - xOffset, top - yOffset);
    ctx.lineTo(left - xOffset - arrowSize / 2, top - yOffset + arrowSize);
    ctx.lineTo(left - xOffset + arrowSize / 2, top - yOffset + arrowSize);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = labelColor;
    ctx.font = labelFont;
    ctx.textAlign = 'center';
    ctx.fillText('Value', left - 20, top - 25);

    ctx.textAlign = 'right';
    ctx.fillText('DAY', right - 20, bottom + 5);

    ctx.restore();
  },
};

const dynamicBoundsPlugin: Plugin = {
  id: 'dynamicBounds',
  afterDatasetsDraw(chart: any): void {
    const dataPoints: DataChart[] = chart.data.datasets[0].data;

    if (dataPoints.length > 0) {
      const { min, max } = dataPoints.reduce(
        (acc, dataPoint) => ({
          min: Math.min(acc.min, dataPoint.l, dataPoint.c, dataPoint.h, dataPoint.o),
          max: Math.max(acc.max, dataPoint.l, dataPoint.c, dataPoint.h, dataPoint.o),
        }),
        { min: Infinity, max: -Infinity },
      );

      chart.options.scales.y.min = min - 5;
      chart.options.scales.y.max = max + 5;

      chart.update();
    }
  },
};

const plugins = [dynamicBoundsPlugin, candlestick, crosshair, axisArrowPlugin];

export const TimelineConfig = { data, options, plugins };
