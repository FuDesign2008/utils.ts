/**
 *
 * @author FuDesign2008@163.com
 * @date  2019-11-12
 */

import { PIXEL_RATIO as SCREEN_PIXEL_RATIO } from '../sys/screen'
import { SUPPORT_HIGH_DPI_SCREEN } from './config'

const PIXEL_RATIO = SUPPORT_HIGH_DPI_SCREEN ? SCREEN_PIXEL_RATIO : 1

export { PIXEL_RATIO }
