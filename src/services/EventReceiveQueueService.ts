import { EventReceiveQueue } from '../models/eventReceiveQueue';
import { EventReceiveQueueDto } from '../types/dtos/EventReceiveQueue/EventReceiveQueueDto';

export const createEventReceiveQueue = async (data: EventReceiveQueueDto) => {
    return await EventReceiveQueue.create(data);
};

export const getAllEventReceiveQueues = async () => {
    return await EventReceiveQueue.findAll();
};

export const getEventReceiveQueueById = async (id: number) => {
    return await EventReceiveQueue.findByPk(id);
};

export const updateEventReceiveQueue = async (id: number, data: EventReceiveQueueDto) => {
    const [updated] = await EventReceiveQueue.update(data, {
        where: { id }
    });
    if (updated) {
        return await EventReceiveQueue.findByPk(id);
    }
    return null;
};

export const deleteEventReceiveQueue = async (id: number) => {
    const deleted = await EventReceiveQueue.destroy({
        where: { id }
    });
    return deleted;
};

export const addNumberOfAttempts = async (id: number) => {
    const eventReceiveQueue = await EventReceiveQueue.findByPk(id);
    if (eventReceiveQueue) {
        eventReceiveQueue.numberOfAttempts += 1;
        return await eventReceiveQueue.save();
    }
    return null;
}
