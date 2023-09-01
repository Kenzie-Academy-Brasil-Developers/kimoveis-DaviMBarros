import { handleErrors } from "./handleErrors.middlewares";
import { verifyToken } from "./verifyToken.middlewares";
import { verifyPermission } from "./verifyPermission.middlewares";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { validateBody } from "./validateBody.middlewares";
import { verifyId } from "./verifyId.middlewares";
import { verifyNameExist } from "./verifyNameExist.middlewares"
import { verifyAddress } from "./verifyAddress.middlewares"
import { verifyBusinessHours, verifyWorkingDays, verifyIdRealEstate, verifyUserBySchedule, verifyScheduleByRealEstates } from "./schedules.middlewares"
import { verifyAdmin } from "./verifyAdmin.middlewares"

export default { handleErrors, verifyToken, verifyPermission, uniqueEmail, validateBody, verifyId, verifyNameExist, verifyAddress, verifyBusinessHours, verifyWorkingDays, verifyIdRealEstate, verifyUserBySchedule, verifyScheduleByRealEstates, verifyAdmin}