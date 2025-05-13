import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useGetCountryByName } from '../hooks/useGetCountryByName';
import { useState } from 'react';
import CountryData from './CountryData';

interface IFormInput {
  countryName: string;
}

function InputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IFormInput>();
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);

  const { loadingCountryData, countryData } = useGetCountryByName(searchQuery);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (
      data.countryName.toLowerCase() === 'israel' ||
      data.countryName.toLowerCase() === 'isr' ||
      data.countryName.toLowerCase() === 'isra' ||
      data.countryName.toLowerCase() === 'israe' ||
      data.countryName.toLowerCase() === 'state of israel' ||
      data.countryName.toLowerCase() === 'state of israe' ||
      data.countryName.toLowerCase() === 'state of isra' ||
      data.countryName.toLowerCase() === 'state of isr' ||
      data.countryName.toLowerCase() === 'state of is' ||
      data.countryName.toLowerCase() === 'state of i'
    ) {
      setSearchQuery('palestine');
      setError('countryName', {
        type: 'manual',
        message: 'Israel is not a country'
      });
      return;
    } else if (data.countryName.trim().length <= 2 ) {
      setError('countryName', {
        type: 'manual',
        message: 'you should write at lest 3 char'
      });
      return;
    }
    setSearchQuery(data.countryName);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-6 rounded-t-lg bg-white p-8 shadow-lg"
      >
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="countryName"
            className="text-sm font-medium text-gray-700"
          >
            Country Name:
          </label>
          <input
            id="countryName"
            {...register('countryName', {
              required: 'Country name is required'
            })}
            className="mt-1 block w-full rounded-md border border-red-300 bg-white px-3 py-2 shadow-sm focus:border-red-500 focus:ring-red-500 focus:outline-none sm:text-sm"
          />
          {errors.countryName && (
            <p className="text-sm text-red-600">{errors.countryName.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={loadingCountryData}
          className="flex w-full cursor-pointer justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
        >
          {loadingCountryData ? 'Searching...' : 'Search'}
        </button>
      </form>
      <CountryData
        loadingCountryData={loadingCountryData}
        countryData={countryData}
      />
    </>
  );
}

export default InputForm;
