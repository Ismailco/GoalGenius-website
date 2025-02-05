'use client';

import { useState } from 'react';
import { CheckIn } from '@/app/types';
import { createCheckIn, updateCheckIn } from '@/app/lib/storage';

interface CreateCheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
  existingCheckIn?: CheckIn;
  onSave?: (checkIn: CheckIn) => void;
  defaultDate?: string;
}

export default function CreateCheckInModal({
  isOpen,
  onClose,
  existingCheckIn,
  onSave,
  defaultDate,
}: CreateCheckInModalProps) {
  const [date, setDate] = useState(existingCheckIn?.date || defaultDate || new Date().toISOString().split('T')[0]);
  const [mood, setMood] = useState(existingCheckIn?.mood || 'good');
  const [energy, setEnergy] = useState(existingCheckIn?.energy || 'medium');
  const [accomplishments, setAccomplishments] = useState<string[]>(existingCheckIn?.accomplishments || ['']);
  const [challenges, setChallenges] = useState<string[]>(existingCheckIn?.challenges || ['']);
  const [goals, setGoals] = useState<string[]>(existingCheckIn?.goals || ['']);
  const [notes, setNotes] = useState(existingCheckIn?.notes || '');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const checkInData = {
      date,
      mood: mood as CheckIn['mood'],
      energy: energy as CheckIn['energy'],
      accomplishments: accomplishments.filter(Boolean),
      challenges: challenges.filter(Boolean),
      goals: goals.filter(Boolean),
      notes: notes || undefined,
    };

    const savedCheckIn = existingCheckIn
      ? updateCheckIn(existingCheckIn.id, checkInData)
      : createCheckIn(checkInData);

    onSave?.(savedCheckIn);
    onClose();
  };

  const handleArrayInput = (
    index: number,
    value: string,
    array: string[],
    setArray: (value: string[]) => void
  ) => {
    const newArray = [...array];
    newArray[index] = value;

    // Add new empty field if typing in the last field
    if (index === array.length - 1 && value !== '') {
      newArray.push('');
    }

    // Remove empty fields except the last one
    if (value === '' && index !== array.length - 1) {
      newArray.splice(index, 1);
    }

    setArray(newArray);
  };

  const getMoodEmoji = (moodValue: string) => {
    switch (moodValue) {
      case 'great': return '😄';
      case 'good': return '🙂';
      case 'okay': return '😐';
      case 'bad': return '😕';
      case 'terrible': return '😢';
      default: return '🙂';
    }
  };

  const getEnergyIcon = (energyValue: string) => {
    switch (energyValue) {
      case 'high': return '⚡️';
      case 'medium': return '✨';
      case 'low': return '🔋';
      default: return '✨';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl w-full max-w-3xl border border-white/10">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            {existingCheckIn ? 'Edit Check-in' : 'Daily Check-in'}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How are you feeling today?
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {(['great', 'good', 'okay', 'bad', 'terrible'] as const).map((moodOption) => (
                      <button
                        key={moodOption}
                        type="button"
                        onClick={() => setMood(moodOption)}
                        className={`p-2 rounded-xl border transition-all ${
                          mood === moodOption
                            ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl mb-1">{getMoodEmoji(moodOption)}</span>
                        <span className="block text-xs capitalize">{moodOption}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Energy Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['high', 'medium', 'low'] as const).map((energyOption) => (
                      <button
                        key={energyOption}
                        type="button"
                        onClick={() => setEnergy(energyOption)}
                        className={`p-2 rounded-xl border transition-all ${
                          energy === energyOption
                            ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                            : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                        }`}
                      >
                        <span className="text-2xl mb-1">{getEnergyIcon(energyOption)}</span>
                        <span className="block text-xs capitalize">{energyOption}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What did you accomplish today?
                </label>
                <div className="space-y-2">
                  {accomplishments.map((accomplishment, index) => (
                    <input
                      key={index}
                      type="text"
                      value={accomplishment}
                      onChange={(e) => handleArrayInput(index, e.target.value, accomplishments, setAccomplishments)}
                      placeholder={index === 0 ? "Enter an accomplishment" : "Add another accomplishment (optional)"}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What challenges did you face?
                </label>
                <div className="space-y-2">
                  {challenges.map((challenge, index) => (
                    <input
                      key={index}
                      type="text"
                      value={challenge}
                      onChange={(e) => handleArrayInput(index, e.target.value, challenges, setChallenges)}
                      placeholder={index === 0 ? "Enter a challenge" : "Add another challenge (optional)"}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Goals for tomorrow
                </label>
                <div className="space-y-2">
                  {goals.map((goal, index) => (
                    <input
                      key={index}
                      type="text"
                      value={goal}
                      onChange={(e) => handleArrayInput(index, e.target.value, goals, setGoals)}
                      placeholder={index === 0 ? "Enter a goal" : "Add another goal (optional)"}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                    />
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes (optional)
                </label>
                <textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Any other thoughts or reflections..."
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:from-indigo-600 hover:to-purple-600 transform hover:scale-[1.02] transition-all duration-200"
              >
                {existingCheckIn ? 'Save Changes' : 'Submit Check-in'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
